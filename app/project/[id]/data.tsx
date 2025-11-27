export interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  banner: string;
  technologies: string[];

  features: {
    title: string;
    items?: string[];
  }[];

  images: string[];

  installation: {
    title: string;
    steps: { label: string; code?: string }[];
  };

  contactEmail: string;
}

export const projects: ProjectData[] = [
{
    id: "lexicon",
    title: "Ilets Mocktest System and website - Laravel",
    description:
      "Lexicon is a web-based platform designed to provide educational, immigration and testing services.",
    longDescription:
      "Lexicon is a web-based platform designed to provide educational, immigration and testing services. It includes a modern frontend, CMS-driven backend, user dashboards, and integrated testing modules.MockTest is a dedicated module within Lexicon that allows administrators to create mock tests, manage questions, evaluate answers, and generate scores for students.",

    banner: "/images/projects/lexicon.png",
    technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "Eloquent ORM",
        "JavaScript",
        "Tailwind CSS",
    ],

    features: [
      {
        title: "Lexicon Platform",
        items: ["Modern frontend with brand-consistent UI", "Education consultancy pages", "Immigration services content management","Responsive mobile-first design","Authentication system with branded layout","Admin dashboard for complete management","Role-based access for Admin vs Users"],
      },
      {
        title: "MockTest Module",
        items: ["Create/edit/delete mock tests", "Create / Edit appointments", "Add sections (Reading, Writing, Listening, etc.)","Add question groups for structured test creation","Evaluate student answers and generate scores","View user score history","Email notifications"],
      }
    ],

    images: [
      "/images/projects/lexicon.png",
    ],

    installation: {
      title: "Installation Guide",
      steps: [
        { label: "Clone the repository", code: `git clone https://github.com/labib108/lexicon.git` },
        { label: "Navigate to project", code: `cd lexicon` },
        { label: "Install dependencies", code: `composer install\nnpm install` },
        { label: "Copy .env", code: `cp .env.example .env` },
        { label: "Generate key", code: `php artisan key:generate` },
        { label: "Migrate database", code: `php artisan migrate` },
        { label: "Run server", code: `php artisan serve` },
      ],
    },

    contactEmail: "abubuckkersiddikh@gmail.com",
  },

  {
    id: "patient-consultation",
    title: "Patient Consultation System - Laravel",
    description:
      "A complete solution for doctors to manage appointments, health history, SOAP notes, and reports.",
    longDescription:
      "The Patient Consultation System (PCS) is a comprehensive platform designed to help doctors streamline their workflow.",

    banner: "/images/projects/patient.png",
    technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
    ],

    features: [
      {
        title: "Secure Administrator Login",
        items: ["Ensures that only authorized personnel can access the system.", "Session-based login with JWT Token", "Utilizes robust authentication mechanisms to safeguard sensitive patient information."],
      },
      {
        title: "Appointment Scheduling",
        items: ["Simplifies the process of booking and managing appointments.", "Create / Edit appointments", "Provides an intuitive calendar interface for easy scheduling and rescheduling."],
      },
      {
        title: "Client Management",
        items: ["Maintains a detailed list of all patients.", "Allows for quick retrieval of patient information.", "Quick search of patient information."],
      },
      {
        title: "Patient History",
        items: ["Enables the addition and management of detailed patient health histories.", "Supports various formats of SOAP notes (basic, general, and detailed) to document patient interactions accurately."],
      },
      {
        title: "Report Generation",
        items: ["Generates reports automatically, reducing administrative burden.", "Ensures accuracy and efficiency in patient care documentation."," Printed reports are professionally formatted for clarity."],
      },
      {
        title: "Voice to Text Recognition",
        items: ["Supports voice-to-text functionality to streamline the input of patient information.", "Enhances efficiency by allowing doctors to dictate notes directly into the system.","Improves efficiency and reduces the time required for data entry."],
      },
    ],

    images: [
      "/images/projects/patient-consultation/login.png",
      "/images/projects/patient-consultation/client_form.png",
      "/images/projects/patient-consultation/client_list.png",
      "/images/projects/patient-consultation/history_form.png",
      "/images/projects/patient-consultation/history.png",
      "/images/projects/patient-consultation/report.png",
      "/images/projects/patient-consultation/soap1.png",
      "/images/projects/patient-consultation/soap2.png",
      "/images/projects/patient-consultation/db.png",
    ],

    installation: {
      title: "Installation Guide",
      steps: [
        { label: "Clone the repository", code: `git clone https://github.com/...` },
        { label: "Navigate to project", code: `cd patient-management-system-laravel` },
        { label: "Install dependencies", code: `composer install\nnpm install` },
        { label: "Copy .env", code: `cp .env.example .env` },
        { label: "Generate key", code: `php artisan key:generate` },
        { label: "Migrate database", code: `php artisan migrate` },
        { label: "Run server", code: `php artisan serve` },
      ],
    },

    contactEmail: "abubuckkersiddikh@gmail.com",
  },
  {
    id: "shop-management",
    title: "Shop Management System using Laravel",
    description:
      "A modern and efficient Shop Management System built with Laravel to streamline stock management, sales tracking, and invoicing with user authentications.",
    longDescription:
      "A modern and efficient Shop Management System built with Laravel to streamline stock management, sales tracking, and invoicing with user authentications, a powerful tool built to simplify the daily operations of shop owners and businesses. Whether you're managing inventory, tracking sales, overseeing customers, or generating reports this system is designed to help you do it all easily. 🛍️",

    banner: "/images/projects/shop.png",
    technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Tailwind CSS",
    ],

    features: [
      {
        title: "🛡 Authentication & Security",
        items: ["User Registration & Login", "OTP Verification Password Change & Reset", "JWT Token-Based Authentication","Session Management & Middleware Authentication"],
      },
      {
        title: "📊 Dashboard",
        items: ["Overview of Customer, Category, and product stock", "Overview of sales, revenue, and vat collection."],
      },
      {
        title: "📁 Inventory Management",
        items: ["Category Management: Add, edit, delete product categories", "Product Management: Add, update, delete products with stock tracking", "Customer Management: Store customer information and purchase history"],
      },
      {
        title: "💰 Sales & Invoices",
        items: ["Sales Management: Track real-time sales transactions", "Invoice Generation: Create & manage invoices for customers.","Reports: View sales & stock reports"],
      },
      {
        title: "📱 Responsive Design",
        items: ["Fully responsive for desktop, tablet, and mobile devices"],
      }
    ],

    images: [
      "/images/projects/shop/1.png",
      "/images/projects/shop/2.png",
      "/images/projects/shop/3.png",
      "/images/projects/shop/4.png",
      "/images/projects/shop/5.png",
      "/images/projects/shop/6.png",
      "/images/projects/shop/7.png",
      "/images/projects/shop/8.png",
      "/images/projects/shop/9.png",
      "/images/projects/shop/10.png",
      "/images/projects/shop/11.png",
      "/images/projects/shop/12.png",
      "/images/projects/shop/13.png",
      "/images/projects/shop/14.png",
      "/images/projects/shop/15.png",
      "/images/projects/shop/16.png",
      "/images/projects/shop/17.png",
    ],

    installation: {
      title: "Installation Guide",
      steps: [
        { label: "Clone the repository", code: `git clone https://github.com/labib108/Shop-Management-System.git ` },
        { label: "Navigate to project", code: `cd Shop-Management-System` },
        { label: "Install dependencies", code: `composer install\nnpm install` },
        { label: "Copy .env", code: `cp .env.example .env` },
        { label: "Generate key", code: `php artisan key:generate` },
        { label: "Migrate database", code: `php artisan migrate` },
        { label: "Run server", code: `php artisan serve` },
      ],
    },

    contactEmail: "abubuckkersiddikh@gmail.com",
  },
  {
    id: "kuet-bank",
    title: "Banking System(Desktop Application -Java)",
    description:
      "The Kuet bank is a desktop-based application designed to provide secure, efficient, and user-friendly banking services. This system allows users to manage their accounts, transfer funds, pay bills, and access transaction details from anywhere.",
    longDescription:
      "The Kuet bank is a desktop-based application designed to provide secure, efficient, and user-friendly banking services. This system allows users to manage their accounts, transfer funds, pay bills, and access transaction details from anywhere.",

    banner: "/images/projects/bank.png",
    technologies: [
        "Java",
        "Java Swing",
        "MySQL",
    ],

    features: [
      {
        title: "User Authentication",
        items: ["Secure login and account creation with data encryption.", "Reset Password functionality to ensure account safety."],
      },
      {
        title: "Account Management",
        items: ["View balances and account details.", "Edit Personal information", "Request account statements."],
      },
      {
        title: "Fund Transfers",
        items: ["Perform seamless and secure intra-bank and inter-bank transfers", "Allows credit from other account", "Send money to other accounts."],
      },
      {
        title: "Transaction History",
        items: [" Access a detailed log of all past transactions."],
      },
      {
        title: "Admin Dashboard",
        items: ["Manage users, monitor transactions, and generate reports.", "Verify ledger","Accept User Requests"],
      }
    ],

    images: [
      "/images/projects/bank.png",
    ],

    installation: {
      title: "Installation Guide",
      steps: [
        { label: "Clone the repository", code: `git clone https://github.com/labib108/internet-banking.git` },
        { label: "Navigate to project", code: `cd internet-banking` },
        { label: "Open project in IDE", code: `Open the project using an IDE that supports Java (e.g., IntelliJ IDEA, Eclipse)` },
        { label: "Set up database", code: `Create a MySQL database and import the provided SQL file to set up the necessary tables.` },
        { label: "Configure database connection", code: `Update the database connection settings in the application's configuration file to match your MySQL setup.` },
        { label: "Run the application", code: `Compile and run the Java application from your IDE.` },
      ],
    },

    contactEmail: "abubuckkersiddikh@gmail.com",
  },
];
