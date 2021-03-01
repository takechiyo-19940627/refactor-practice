const input = `office, country, telephone\nChicago, USA, +1 312 373 1000\nBeijing, China, +86 4008 900 505\nPort Alegre, Brazil, +55 51 3079 3550\nBangalore, India, +91 80 4064 9570`;

let data = acquireData(input);
console.log(data);

function acquireData(input) {
  const lines = input.split("\n");
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === "") continue;
    const record = line.split(",");
    if (record[1].trim() === "India") {
      result.push({city: record[0].trim(), phone: record[2].trim()});
    }
  }
  return result;
}