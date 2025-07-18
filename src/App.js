import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import SkeletonLoader from './components/SkeletonLoader';
import Error from './components/Error';

const PAGE_SIZE = 10;

function App() {
  const [rooms, setRooms] = useState([]);
  const [allRooms, setAllRooms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Load all rooms from dummyRooms.json on mount
  useEffect(() => {
    setLoading(true);
    fetch('/dummyRooms.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch room data');
        return res.json();
      })
      .then((data) => {
        setAllRooms(data);
        setRooms(data.slice(0, PAGE_SIZE));
        setHasMore(data.length > PAGE_SIZE);
        setPage(2);
        setLoading(false);
      })
      .catch((e) => {
        setError('Failed to load rooms.');
        setLoading(false);
      });
  }, []);

  // Infinite scroll load more
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const nextRooms = allRooms.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
      setRooms((prev) => [...prev, ...nextRooms]);
      setPage((p) => p + 1);
      setHasMore(page * PAGE_SIZE < allRooms.length);
      setLoading(false);
    }, 600);
  }, [loading, hasMore, page, allRooms]);

  return (
    <div className="App">
      <h1>Room Listing</h1>
      <RoomList
        rooms={rooms}
        loadMore={loadMore}
        hasMore={hasMore}
        loading={loading}
        error={error}
      />
      {loading && <SkeletonLoader />}
      {error && <Error message={error} />}
    </div>
  );
}

export default App;
