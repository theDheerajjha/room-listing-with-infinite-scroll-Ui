const fs = require('fs');

const imageUrls = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
];

const videoUrls = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4"
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const rooms = [];
for (let i = 1; i <= 50; i++) {
  const variants = [];
  for (let j = 1; j <= 2 + (i % 2); j++) {
    const isVideo = (j % 2 === 1);
    variants.push({
      id: `variant-${i}-${j}`,
      name: isVideo ? `King ${j}` : `Twin ${j}`,
      description: isVideo
        ? `King bed, free WiFi, breakfast included.`
        : `Twin beds, free WiFi, breakfast included.`,
      price: `RM${1000 + i * 10 + j * 5}`,
      ...(isVideo
        ? { video_url: getRandom(videoUrls) }
        : {
            room_images: [getRandom(imageUrls)]
          })
    });
  }
  rooms.push({
    id: `room-${i}`,
    name: `Room ${i}`,
    description: `A comfortable room with modern amenities.`,
    variants
  });
}

fs.writeFileSync('public/dummyRooms.json', JSON.stringify(rooms, null, 2));
console.log('Generated 50 rooms in public/dummyRooms.json with only W3Schools video URLs.'); 