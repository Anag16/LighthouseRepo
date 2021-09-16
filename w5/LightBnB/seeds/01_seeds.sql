INSERT INTO users (name, email, password)
VALUES ('Puky', 'Puky@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Jerry', 'Jerry@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Ana', 'Ana@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Jeriel', 'Jeriel@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Isa', 'Isa@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, country, street, city, province, post_code)
VALUES ('1', 'title1', 'description', 'https://images.pexels.com/photos/2937800/pexels-photo-2937800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 150, 'Canada', '100 Laurier Avenue', 'Ottawa', 'Ontario', 'AAAAAA'),
('2', 'title2', 'description', 'https://images.pexels.com/photos/2937800/pexels-photo-2937800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 200, 'Canada', '40 Main Street', 'Toronto', 'Ontario', 'AAAAAA'),
('3', 'title3', 'description', 'https://images.pexels.com/photos/2937800/pexels-photo-2937800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', 'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 90, 'Canada', '4655 Avenue Gaspé', 'Montreal', 'Quebec', 'AAAAAA');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2021-09-01', '2021-09-02', 2, 4),
('2021-09-22', '2021-10-22', 1, 5),
('2021-09-09', '2021-09-12', 3, 6);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (4, 2, 1, 5, 'This is the most perfect LightBnB !'),
(5, 1, 2, 3, 'Everything was good :)'),
(6, 3, 3, 4, 'good location!');
