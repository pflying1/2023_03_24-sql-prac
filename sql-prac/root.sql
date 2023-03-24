use root;
CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    modelnumber VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

INSERT INTO products (name, modelnumber, series) VALUES ("victolee1", "1234", "1111");
INSERT INTO products (name, modelnumber, series) VALUES ("victolee2", "1234", "1111");
INSERT INTO products (name, modelnumber, series) VALUES ("victolee3", "1234", "1111");