CREATE database Sonidos

CREATE TABLE Sonidos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Duracion VARCHAR(10) NOT NULL,
    Tipo VARCHAR(50) NOT NULL,
    Autores VARCHAR(255) NOT NULL,
    Url VARCHAR(255) NOT NULL
);
INSERT INTO Sonidos (Nombre, Duracion, Tipo, Autores, Url)
VALUES
('BEYONCE!!','0:06','Stan Twitter','Mohammed Beyonce', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/ShootBeyonce.mp3'),
('Girl wtf', '0:08', 'Stan Twitter', 'girlwtf', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/Girlwtf.mp3'),
('Victor y Joel', '1:01', 'JV', 'Jiovanni Vazques', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/victorLeDiceAJoel.mp3'),
('Perro stock', '0:15', 'Perro sonidos', 'Belén Naveyra', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/wenomechainsama.mp3'),
('Choo choo charles', '0:18', 'Stan Twitter', 'Ugly Twink', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/JamesCharlesYeahyeahyeah.mp3'),
('LA MESA!! ESTA ROTA', '0:12', 'Tiktok', 'nene cargoso', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/OurTableItsBroken.mp3'),
('DON POLLO', '0:30', 'Audio cursed', 'Don Pollo', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/DonPollo.mp3'),
('the tornado', '0:08', 'Efecto de Sonido', 'Stan Twitter', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/mgtornadoisformingBYEEE.mp3'),
('watafak q le pasaba', '0:05', 'Momento cultural', 'Natalia Fernandez', 'https://github.com/Belnanya/Base-de-datos-tp/blob/main/sounds/watafakquelepasaba.mp3');
