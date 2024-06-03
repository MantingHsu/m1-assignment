document.addEventListener('DOMContentLoaded', () => {
    const photoGallery = document.getElementById('photo-gallery');

    const categories = [
        {
            type: 'Dogs',
            photos: [
                'dog 1 .jpeg', 'dog 2 .jpeg', 'dog 3.jpeg', 'dog 4 .jpeg'
            ],
            captions: [
                'Diamond', 'Lucky', 'Calla', 'Star'
            ],
            descriptions: [
                'Yorkshire Terrier', 'Golden Retriever', 'Rottweiler', 'Papillon'
            ]
        },
        {
            type: 'Cats',
            photos: [
                'cat1.png', 'cat2 .jpeg', 'cat3.jpeg', 'cat4.png'
            ],
            captions: [
                'Bobby', 'Nacy', 'Moon', 'Tofu'
            ],
            descriptions: [
                'Domestic Shorthair', 'Domestic Shorthair', 'Domestic Shorthair', 'British Shorthair'
            ]
        },
        {
            type: 'Small Animals',
            photos: [
                'samll animal 1 .jpeg', 'small animal 2 .jpeg', 'small animal 3 .jpeg'
            ],
            captions: [
                'H', 'JJ', 'Apple'
            ],
            descriptions: [
                'Hamster', 'Chinchilla', 'Hedgehog'
            ]
        }
    ];

    categories.forEach(category => {
        category.photos.forEach((photo, index) => {
            const openCaptionTag = '<div class="caption">';
            const closeCaptionTag = '</div>';
            const openDescTag = '<div class="description">';
            const closeDescTag = '</div>';

            const photoItem = document.createElement('li');
            photoItem.className = 'photo-item';

            const img = document.createElement('img');
            img.src = `image-animals/${photo}`;
            img.alt = category.captions[index];

            const caption = openCaptionTag + category.captions[index] + closeCaptionTag;
            const description = openDescTag + category.descriptions[index] + closeDescTag;

            photoItem.innerHTML = img.outerHTML + caption + description;
            photoGallery.appendChild(photoItem);
        });
    });
});
