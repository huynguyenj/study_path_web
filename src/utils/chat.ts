export function createConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(`✅Connect to roomId: ${roomId} `)
    },
    disconnect() {
      console.log(`❌ Disconnected roomId: ${roomId}`)
    }
  }
}
