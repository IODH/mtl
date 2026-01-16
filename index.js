import { translateFrom } from './utils/translate-from.js';
import { translateTo } from './utils/translate-to.js';

const languageChanger = document.getElementById('languageChanger');
const submit = document.getElementById('submit');
const textArea = document.getElementById('text');
const translatedTextDiv = document.getElementById('translatedText');
let mode;

submit.addEventListener('click', (e) => {
	e.preventDefault();

	mode = languageChanger.innerText;
	const textToTranslate = textArea.value;

	const text =
		mode === '(Укр -> Моя)'
			? translateTo(textToTranslate)
			: translateFrom(textToTranslate);

	translatedTextDiv.innerHTML = text
		.replaceAll(/(Ꚅ̆|ꚅ̆|Ꚑ|ꚑ|ꙏ|І̵Ꙋ|І̵ꙋ)/gu, (m) => `<span class="noto">${m}</span>`)
		.replaceAll('წ', '<span class="cil">წ</span>');
});

languageChanger.addEventListener('click', (e) => {
	e.preventDefault();

	if (mode === '(Укр -> Моя)') {
		mode = '(Моя -> Укр)';
		languageChanger.innerText = '(Моя -> Укр)';
	} else {
		mode = '(Укр -> Моя)';

		languageChanger.innerText = '(Укр -> Моя)';
	}
});
