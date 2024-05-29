Goal:
The primary objective of DeliverWorth is to provide Uber Eats drivers with a quick and easy way to determine if a delivery is financially worthwhile. By simply entering their car's mileage and the current gas price in their area, drivers can upload a screenshot of their delivery details, and DeliverWorth will use OCR technology to analyze the image and calculate the profitability of the delivery.

How to Use:
-Enter Car Details
  Input your car's mileage (miles per gallon) and the current gas price per gallon in the respective fields.

-Upload Screenshot:
  Upload a screenshot of your Uber Eats delivery details by clicking the "Choose File" button and selecting the image.
  Click the "Process Screenshot" button to analyze the image. The application will use OCR to read the text on the screenshot and extract the necessary data.

-View Results
  The extracted data will be displayed in the respective fields.
  Click the "Calculate" button to see the total cost of the delivery trip, profit, profit per mile, and dollar per hour.

Technologies Used:
-HTML: For structuring the web page.
-CSS: For styling and ensuring a responsive design.
-JavaScript: For client-side scripting and handling user interactions.
-Node.js: For server-side processing and handling file uploads.
-Tesseract.js: For optical character recognition (OCR) to extract text from images.

In-Depth Descriptions of Technologies Used:

-User Interface Design (HTML and CSS)
  I designed a clean and intuitive user interface using HTML for the structure and CSS for styling. This ensured that the application is user-friendly and visually appealing. I made sure the design included a responsive layout, making the application accessible on various devices, from desktops to mobile phones.

-Data Extraction Logic (Optical Character Recognition)
  I integrated Tesseract.js, an OCR library, to process uploaded screenshots. Tesseract.js extracts text from images, allowing me to read key delivery details such as distance, base pay, and estimated time. I implemented precise regular expressions to locate and extract essential information from the text recognized by the OCR. This involved refining patterns to accurately capture data such as mileage, delivery distance, base pay, and estimated delivery time. I ensured that the extracted data is correctly populated into the respective fields for further calculations.

-JavaScript Integration (Node.js)
  I utilized Node.js for the server-side logic, handling the file uploads and processing the OCR results. I used JavaScript to handle user interactions, process the extracted data, and perform the necessary calculations to provide the final results.

-Calculation and Results Display
  I developed the application to calculate the total cost of the delivery trip, the profit, profit per mile, and dollar per hour based on the extracted and user-provided data.


