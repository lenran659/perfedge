self.onmessage = function(e) {
  const n = e.data;
  const result = fibonacci(n);
  self.postMessage(result);
}

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export {}; 