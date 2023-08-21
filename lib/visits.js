export async function incrementVisitCount() {
    const response = await fetch('/api/apiCounter', {
      method: 'POST'
    });
  
    if (!response.ok) {
      throw new Error('Failed to increment visit count');
    }
  
    const data = await response.json();
    return data.count;
  }
  
  