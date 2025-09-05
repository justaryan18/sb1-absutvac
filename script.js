// Handle file upload
document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileUpload");
  const fileInfo = document.getElementById("fileInfo");

  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0];
      if (file) {
        fileInfo.textContent = `Uploaded File: ${file.name} (${Math.round(file.size/1024)} KB)`;
      }
    });
  }

  // Chart.js Example Chart
  const ctx = document.getElementById("fraudChart");
  if (ctx) {
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
          label: "Fraud Cases",
          data: [12, 19, 3, 5, 2],
          backgroundColor: "rgba(0, 119, 204, 0.6)"
        }]
      }
    });
  }
});
