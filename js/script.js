// Создаем переменные для хранения путей к изображениям
const imageFirst = "./assets/images/1.jpg";
const imageSecond = "./assets/images/6.jpg";
// Получаем элементы DOM дерева
const galleryImage = document.getElementById("galleryImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
// Функция для изменения изображения (кнопка вперед)
function clickNextImage(imageSecond) {
	galleryImage.src = imageSecond;
}
// Функция для изменения изображения (кнопка назад)
function clickNextImage(imageFirst) {
	galleryImage.src = imageFirst;
}