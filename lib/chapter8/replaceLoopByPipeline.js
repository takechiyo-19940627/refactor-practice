const input = `office, country, telephone\nChicago, USA, +1 312 373 1000\nBeijing, China, +86 4008 900 505\nPort Alegre, Brazil, +55 51 3079 3550\nBangalore, India, +91 80 4064 9570`;

let data = acquireData(input);
console.log(`${data[0].city} ${data[0].phone}`);

function acquireData(input) {
  const lines = input.split("\n");
  return lines
          .slice(1)
          .filter(line => line.trim() !== "")
          .map(line => line.split(","))
          .filter(record => record[1].trim() === "India")
          .map(record => ({city: record[0].trim(), phone: record[2].trim()}));
}
