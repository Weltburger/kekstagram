//'use strict';

const LIKES_MIN = 15
const LIKES_MAX = 200

var picturesContainer = document.querySelector('.pictures')
var pictureTemplate = document.querySelector('#picture-template')
    .content
    .querySelector('.picture');

var comments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var descriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят',
    'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
    'Вот это тачка!'];

var arrayRandElement = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

var arrayRandElements = function (arr, count) {
    var result = []
    for (var i = 0; i < count; i++) {
        var rand = Math.floor(Math.random() * arr.length);
        result.push(arr[rand]);
    }
    return result;
}

var pictures = []

for (var i = 0; i < 26; i++) {
    pictures.push({
        url: `photos/${i+1}.jpg`,
        likes: Math.floor(Math.random() * (LIKES_MAX - LIKES_MIN) + LIKES_MIN),
        comments: arrayRandElements(comments, Math.floor(Math.random() * (2.3 - 1) + 1)),
        description: arrayRandElement(descriptions)
    });
}

var renderPicture = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);
   
    pictureElement.querySelector('img').src = picture.url;
    pictureElement.querySelector('.picture-likes').textContent = picture.likes;
    pictureElement.querySelector('.picture-comments').textContent = picture.comments.length;
        
    return pictureElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < pictures.length; i++) {
    fragment.appendChild(renderPicture(pictures[i]));
}
picturesContainer.appendChild(fragment);
