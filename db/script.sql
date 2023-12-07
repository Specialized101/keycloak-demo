create table if not exists users (
	id SERIAL primary key,
	firstname VARCHAR(255),
	lastname VARCHAR(255)
);

insert into users (firstname, lastname)
values
('Jean', 'Edouard'),
('Francis', 'Huster'),
('Abdul', 'Javed');