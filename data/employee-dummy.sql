CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE
    IF NOT EXISTS employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
    );

INSERT INTO
    employees (first_name, last_name, position, phone, email)
VALUES
    (
        'John',
        'Doe',
        'Software Engineer',
        '123-456-7890',
        'john.doe@example.com'
    ),
    (
        'Jane',
        'Smith',
        'Product Manager',
        '234-567-8901',
        'jane.smith@example.com'
    ),
    (
        'Alice',
        'Johnson',
        'UX Designer',
        '345-678-9012',
        'alice.johnson@example.com'
    ),
    (
        'Bob',
        'Brown',
        'QA Tester',
        '456-789-0123',
        'bob.brown@example.com'
    ),
    (
        'Charlie',
        'Davis',
        'Data Scientist',
        '567-890-1234',
        'charlie.davis@example.com'
    ),
    (
        'David',
        'Evans',
        'DevOps Engineer',
        '678-901-2345',
        'david.evans@example.com'
    ),
    (
        'Ella',
        'Foster',
        'Project Manager',
        '789-012-3456',
        'ella.foster@example.com'
    ),
    (
        'Frank',
        'Green',
        'Frontend Developer',
        '890-123-4567',
        'frank.green@example.com'
    ),
    (
        'Grace',
        'Harris',
        'Backend Developer',
        '901-234-5678',
        'grace.harris@example.com'
    ),
    (
        'Henry',
        'Iverson',
        'Mobile Developer',
        '012-345-6789',
        'henry.iverson@example.com'
    ),
    (
        'Ivy',
        'Johnson',
        'Data Analyst',
        '123-567-8901',
        'ivy.johnson@example.com'
    ),
    (
        'Jack',
        'King',
        'Cloud Architect',
        '234-678-9012',
        'jack.king@example.com'
    ),
    (
        'Karen',
        'Lewis',
        'Security Specialist',
        '345-789-0123',
        'karen.lewis@example.com'
    ),
    (
        'Liam',
        'Morris',
        'Network Engineer',
        '456-890-1234',
        'liam.morris@example.com'
    ),
    (
        'Mia',
        'Nelson',
        'Database Administrator',
        '567-901-2345',
        'mia.nelson@example.com'
    ),
    (
        'Noah',
        'Owens',
        'Full Stack Developer',
        '678-012-3456',
        'noah.owens@example.com'
    ),
    (
        'Olivia',
        'Parker',
        'Technical Writer',
        '789-123-4567',
        'olivia.parker@example.com'
    ),
    (
        'Paul',
        'Quinn',
        'System Administrator',
        '890-234-5678',
        'paul.quinn@example.com'
    ),
    (
        'Quincy',
        'Roberts',
        'Machine Learning Engineer',
        '901-345-6789',
        'quincy.roberts@example.com'
    ),
    (
        'Rachel',
        'Smith',
        'AI Researcher',
        '012-456-7890',
        'rachel.smith@example.com'
    );