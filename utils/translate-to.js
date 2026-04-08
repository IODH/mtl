import { consonantLetters } from './constants.js';

function replaceTo(str) {
	return str
		.replaceAll(
			/[жчшкхгґщбпвмфБПВМФЩЖЧШКХГҐ][іяює]/gu,
			(m) => m[0] + 'ҍ' + m[1],
		)

		.replaceAll('Лль', 'Љ̄')
		.replaceAll('лль', 'љ̄')

		.replaceAll('Ннь', 'Њ̄')
		.replaceAll('ннь', 'њ̄')

		.replaceAll('Тть', 'Ᲊ̄')
		.replaceAll('тть', 'Ᲊ̄')

		.replaceAll('Ддь', '̄')
		.replaceAll('ддь', '̄')

		.replaceAll('Цць', '̄')
		.replaceAll('цць', '̄')

		.replaceAll('Льо', 'Љӏ')
		.replaceAll('льо', 'љӏ')

		.replaceAll('Ньо', 'Њӏ')
		.replaceAll('ньо', 'њӏ')

		.replaceAll('Тьо', 'Ᲊӏ')
		.replaceAll('тьо', 'ᲊӏ')

		.replaceAll('Дьо', 'ӏ')
		.replaceAll('дьо', 'ӏ')

		.replaceAll('Цьо', `ӏ`)
		.replaceAll('цьо', `ӏ`)

		.replaceAll('ьо', 'ӏ')

		.replaceAll('Ць', '')
		.replaceAll('ць', '')

		.replaceAll('Ль', 'Љ')
		.replaceAll('ль', 'љ')

		.replaceAll('Нь', 'Њ')
		.replaceAll('нь', 'њ')

		.replaceAll('Ть', 'Ᲊ')
		.replaceAll('ть', 'ᲊ')

		.replaceAll('Дь', '')
		.replaceAll('дь', '')

		.replaceAll(/ь[яюєї]/gu, (m) => 'ьˮ' + m[1])

		.replaceAll(/[НнЛлТтДдЗзСсЦц][іяює]/gu, (m) => m[0] + 'ь' + m[1])

		.replaceAll('Ае', 'Ӕ')
		.replaceAll('ае', 'ӕ')

		.replaceAll('Джмҍі', 'Ꙉмҍі')
		.replaceAll('джмҍі', 'ꙉмҍі')

		.replaceAll(/Джҍ[іяює]/gu, (m) => 'Ꙉ' + m[3])
		.replaceAll(/джҍ[іяює]/gu, (m) => 'ꙉ' + m[3])

		.replaceAll('Дж', 'Ԫ')
		.replaceAll('дж', 'ԫ')

		.replaceAll('Дзе', 'Ꙃ')
		.replaceAll('дзе', 'ꙃ')

		.replaceAll('Дзьо', 'Ԇӏ')
		.replaceAll('дзьо', 'ԇӏ')

		.replaceAll(/Дзь[іяює]/gu, (m) => 'Ԇ' + m[3])
		.replaceAll(/дзь[іяює]/gu, (m) => 'ԇ' + m[3])
		.replaceAll('дԅ', 'ԇ')

		.replaceAll('Дз', 'Ꚉ')
		.replaceAll('дз', 'ꚉ')

		.replaceAll('Йов', '')
		.replaceAll('йов', '')

		.replaceAll('Йоу', '')
		.replaceAll('йоу', '')

		.replaceAll('Оу', 'Ꙋ')
		.replaceAll('оу', 'ꙋ')

		.replaceAll('Тс', 'Ꚑ')
		.replaceAll('тс', 'ꚑ')

		.replaceAll('Ою', 'Ӧ̄')
		.replaceAll('ою', 'ӧ̄')

		.replaceAll('От', 'Ѿ')
		.replaceAll('от', 'ѿ')

		.replaceAll('Кс', 'Ѯ')
		.replaceAll('кс', 'ѯ')

		.replaceAll('Дн', 'Ԁ')
		.replaceAll('дн', 'ԁ')

		.replaceAll('Жҍю', 'Ӝ')
		.replaceAll('жҍю', 'ӝ')

		.replaceAll('Зню', 'Ԑ̈')
		.replaceAll('зню', 'ԑ̈')

		.replaceAll('Кҍю', 'К̈')
		.replaceAll('кҍю', 'к̈')

		.replaceAll('Нт', 'Ԣ')
		.replaceAll('нт', 'ԣ')

		.replaceAll('Тн', 'Т̈')
		.replaceAll('тн', 'т̈')

		.replaceAll('Чн', 'Ӵ')
		.replaceAll('чн', 'ӵ')

		.replaceAll('Дю', 'Д̈')
		.replaceAll('дю', 'д̈')

		.replaceAll('Зю', 'Ӟ')
		.replaceAll('зю', 'ӟ')

		.replaceAll('Цм', 'Ц̈')
		.replaceAll('цм', 'ц̈')

		.replaceAll(/Двҍ[іяєю]/gu, (m) => '' + m[3])
		.replaceAll(/двҍ[іяєю]/gu, (m) => '' + m[3])

		.replaceAll('Хс', '')
		.replaceAll('хс', '')

		.replaceAll('Ст', '')
		.replaceAll('ст', '')

		.replaceAll('Cтр', 'Ѕ')
		.replaceAll('стр', 'ѕ')

		.replaceAll('Cп', 'Ꙅ')
		.replaceAll('сп', 'ꙅ')

		.replaceAll('Нг', 'Ҥ')
		.replaceAll('нг', 'ҥ')

		.replaceAll('Дг', 'Ꙣ')
		.replaceAll('дг', 'ꙣ')

		.replaceAll('Лг', 'Ꙥ')
		.replaceAll('лг', 'ꙥ')

		.replaceAll('Лп', '')
		.replaceAll('лп', '')

		.replaceAll('Тл', '')
		.replaceAll('тл', '')

		.replaceAll(/Тль[іяює]/gu, (m) => '' + m[3])
		.replaceAll(/тль[іяює]/gu, (m) => '' + m[3])

		.replaceAll('Тљ', '')
		.replaceAll('тљ', '')

		.replaceAll('Лт', '')
		.replaceAll('лт', '')

		.replaceAll('Лр', '')
		.replaceAll('лр', '')

		.replaceAll('Нґ', 'Ҥ̂')
		.replaceAll('нґ', 'ҥ̂')

		.replaceAll('Іа', 'Ꙗ')
		.replaceAll('іа', 'ꙗ')

		.replaceAll('Іє', 'Ѥ')
		.replaceAll('іє', 'ѥ')

		.replaceAll('Чч', 'Ꚇ')
		.replaceAll('чч', 'ꚇ')

		.replaceAll('Ір', 'Ѷр')
		.replaceAll('ір', 'ѷр')

		.replaceAll('Ом', 'Ѡм')
		.replaceAll('ом', 'ѡм')

		.replaceAll('Яє', 'Ԙ')
		.replaceAll('яє', 'ԙ')

		.replaceAll('Твор', 'Ꝥор')
		.replaceAll('твор', 'ꝥор')

		.replaceAll('Втор', 'Ꝧор')
		.replaceAll('втор', 'ꝧор')

		.replaceAll('Тор', 'Þор')
		.replaceAll('тор', 'þор')

		.replaceAll('Рх', 'Ԗ')
		.replaceAll('рх', 'ԗ')

		.replaceAll('Лх', 'Ԕ')
		.replaceAll('лх', 'ԕ')

		.replaceAll('Др', 'Δ')
		.replaceAll('др', 'δ')

		.replaceAll('Еєр', 'Ъ̈̄р')
		.replaceAll('еєр', 'ъ̈̄р')

		.replaceAll('Еер', 'Ъ̄р')
		.replaceAll('еер', 'ъ̄р')

		.replaceAll('Ейр', 'р')
		.replaceAll('ейр', 'р')

		.replaceAll('Єр', 'Ъ̈р')
		.replaceAll('єр', 'ъ̈р')

		.replaceAll('Ер', 'Ър')
		.replaceAll('ер', 'ър')

		.replaceAll('Єєв', 'Ӭ̄в')
		.replaceAll('єєв', 'ӭ̄в')

		.replaceAll('Чҍі', 'Ћҍі')
		.replaceAll('чҍі', 'ћҍі')

		.replaceAll(/Чҍ[яює]/gu, (m) => 'ҍ' + m[2])
		.replaceAll(/чҍ[яює]/gu, (m) => 'ҍ' + m[2])

		.replaceAll(/Ч[аеу]/gu, (m) => '' + m[1])
		.replaceAll(/ч[аеу]/gu, (m) => '' + m[1])

		.replaceAll('Ин', 'Ꙟн')
		.replaceAll('ин', 'ꙟн')

		.replaceAll('Зц', 'Џ')
		.replaceAll('зц', 'џ')

		.replaceAll('Цз', 'Џ̆')
		.replaceAll('цз', 'џ̆')

		.replaceAll('Рт', 'Ҏ')
		.replaceAll('рт', 'ҏ')

		.replaceAll('Чж', 'Ҹ')
		.replaceAll('чж', 'ҹ')

		.replaceAll('Чь', 'Ћь')
		.replaceAll('чь', 'ћь')

		.replaceAll('Хр', 'Һ')
		.replaceAll('хр', 'һ')

		.replaceAll('Дч', 'Ԭ')
		.replaceAll('дч', 'ԭ')

		.replaceAll('Тцю', 'Ҵ̈')
		.replaceAll('тцю', 'ҵ̈')

		.replaceAll('Тц', 'Ҵ')
		.replaceAll('тц', 'ҵ')

		.replaceAll('Коп', 'Ҁ')
		.replaceAll('коп', 'ҁ')

		.replaceAll('Зм', 'Ꙁ')
		.replaceAll('зм', 'ꙁ')

		.replaceAll('Тч', 'Ꚓ')
		.replaceAll('тч', 'ꚓ')

		.replaceAll('Ир', 'Ѵр')
		.replaceAll('ир', 'ѵр')

		.replaceAll('Дво', 'Двꙫ')
		.replaceAll('дво', 'двꙫ')

		.replaceAll('Обө', 'Ꙫбє')
		.replaceAll('обө', 'ꙫбє')

		.replaceAll(/О(кр|хр)/gu, (_, group) => 'Ꚛ' + group)
		.replaceAll(/о(кр|хр)/gu, (_, group) => 'ꚛ' + group)

		.replaceAll('Багато', 'Бәгтꙮ')
		.replaceAll('багато', 'бәгтꙮ')

		.replaceAll('Много', 'Мнꙮг')
		.replaceAll('много', 'мнꙮг')

		.replaceAll('Ог', 'Ѻг')
		.replaceAll('ог', 'ѻг')

		.replaceAll('Око', 'Ꙩко')
		.replaceAll('око', 'ꙩко')

		.replaceAll('Очо', 'Ꚙч')
		.replaceAll('очо', 'ꚙч')

		.replaceAll(/Очҍі[ ,-:;]/gu, (m) => 'Ꙭ' + m[1] + m[2] + m[3] + m[4])
		.replaceAll(/очҍі[ ,-:;]/gu, (m) => 'ꙭ' + m[1] + m[2] + m[3] + m[4])

		.replaceAll('Оі', 'Ꙕ')
		.replaceAll('оі', 'ꙕ')

		.replaceAll('Аа', 'А̄')
		.replaceAll('аа', 'а̄')

		.replaceAll('Оо', 'О̄')
		.replaceAll('оо', 'о̄')

		.replaceAll('Уу', 'Ӯ')
		.replaceAll('уу', 'ӯ')

		.replaceAll('Ее', 'Е̄')
		.replaceAll('ее', 'е̄')

		.replaceAll('Ии', 'Ӣ')
		.replaceAll('ии', 'ӣ')

		.replaceAll('Її', 'Ї̄')
		.replaceAll('її', 'ї̄')

		.replaceAll('Іі', 'Ī')
		.replaceAll('іі', 'ī')

		.replaceAll('Ая', 'Ӓ̄')
		.replaceAll('ая', 'ӓ̄')

		.replaceAll('Еє', 'Ё̄')
		.replaceAll('еє', 'ё̄')

		.replaceAll('Ую', 'Ӱ̄')
		.replaceAll('ую', 'ӱ̄')

		.replaceAll(/Й(?=[-,; ])/gu, 'Ј')
		.replaceAll(/(?<=[-,; .])й(?=[-,; .])/gu, 'ј')

		.replaceAll('Зж', 'Ꚅ')
		.replaceAll('зж', 'ꚅ')

		.replaceAll('Елв', 'Э̆л')
		.replaceAll('елв', 'э̆л')

		.replaceAll('Ел', 'Эл')
		.replaceAll('ел', 'эл')

		.replaceAll('Ейл', 'Ӭл')
		.replaceAll('ейл', 'ӭл')

		.replaceAll('Ей', 'Ё')
		.replaceAll('ей', 'ё')

		.replaceAll('Чк', 'Ҿ')
		.replaceAll('чк', 'ҿ')

		.replaceAll('Юю', 'Ю̄')
		.replaceAll('юю', 'ю̄')

		.replaceAll('Яя', 'Я̄')
		.replaceAll('яя', 'я̄')

		.replaceAll('Ое', 'Œ')
		.replaceAll('ое', 'œ')

		.replaceAll('Оє', 'Ө')
		.replaceAll('оє', 'ө')

		.replaceAll('Ює', 'Ӫ')
		.replaceAll('ює', 'ӫ')

		.replaceAll('Юе', 'Ө̄')
		.replaceAll('юе', 'ө̄')

		.replaceAll('Оєв', 'Ө̆')
		.replaceAll('оєв', 'ө̆')

		.replaceAll('Оя', 'Ɔ')
		.replaceAll('оя', 'ɔ')

		.replaceAll('Лц', 'Λ')
		.replaceAll('лц', 'ʌ')

		.replaceAll('Лд', 'L')
		.replaceAll('лд', 'l')

		.replaceAll('Лж', 'Ł')
		.replaceAll('лж', 'ł')

		.replaceAll('Тет', 'Θ')
		.replaceAll('тет', 'ϑ')

		.replaceAll('Га', 'Ɣа')
		.replaceAll('га', 'ɣа')

		.replaceAll('Тх', 'Т̓')
		.replaceAll('тх', 'т̓')

		.replaceAll('Рк', 'Р̌')
		.replaceAll('рк', 'р̌')

		.replaceAll('Гн', 'Ӻ')
		.replaceAll('гн', 'ӻ')

		.replaceAll('Згр', 'Ғ̌')
		.replaceAll('згр', 'ғ̌')

		.replaceAll('Гр', 'Ғ')
		.replaceAll('гр', 'ғ')

		.replaceAll('Гт', '')
		.replaceAll('гт', '')

		.replaceAll('Гм', '')
		.replaceAll('гм', '')

		.replaceAll('Гд', 'Ӷ')
		.replaceAll('гд', 'ӷ')

		.replaceAll('Гш', '')
		.replaceAll('гш', '')

		.replaceAll('Гв', 'Ҕ')
		.replaceAll('гв', 'ҕ')

		.replaceAll(/Зв|Зг|Зд|Зс|Зт|Зх/gu, (m) => m[1].toUpperCase() + '̌')
		.replaceAll(/зв|зг|зд|зс|зт|зх/gu, (m) => m[1] + '̌')

		.replaceAll('Ао', 'А̊')
		.replaceAll('ао', 'а̊')

		.replaceAll('Уо', 'У̊')
		.replaceAll('уо', 'у̊')

		.replaceAll('Чб', '')
		.replaceAll('чб', '')

		.replaceAll('Кр', 'Ԟ')
		.replaceAll('кр', 'ԟ')

		.replaceAll('Кн', 'Ҡ')
		.replaceAll('кн', 'ҡ')

		.replaceAll('Кц', 'К̆')
		.replaceAll('кц', 'к̆')

		.replaceAll('Кш', 'Ҝ')
		.replaceAll('кш', 'ҝ')

		.replaceAll('Кв', '')
		.replaceAll('кв', '')

		.replaceAll('Кл', 'Ҟ')
		.replaceAll('кл', 'ҟ')

		.replaceAll('Кт', 'Ӄ')
		.replaceAll('кт', 'ӄ')

		.replaceAll('Уе', 'Ү')
		.replaceAll('уе', 'ү')

		.replaceAll('Ує', 'Ұ')
		.replaceAll('ує', 'ұ')

		.replaceAll('Зна', '')
		.replaceAll('зна', '')

		.replaceAll('Зн', 'Ԑ')
		.replaceAll('зн', 'ԑ')

		.replaceAll('Дх', '')
		.replaceAll('дх', '')

		.replaceAll('Оа', '')
		.replaceAll('оа', '')

		.replaceAll('Ої', '')
		.replaceAll('ої', '')

		.replaceAll('Уї', '')
		.replaceAll('уї', '')

		.replaceAll('Сх', '')
		.replaceAll('сх', '')

		.replaceAll('Сл', '')
		.replaceAll('сл', '')

		.replaceAll('Іе', '')
		.replaceAll('іе', '')

		.replaceAll('Гл', '')
		.replaceAll('гл', '')

		.replaceAll('Нч', 'Ӈ')
		.replaceAll('нч', 'ӈ')

		.replaceAll('Нс', 'Ԩ')
		.replaceAll('нс', 'ԩ')

		.replaceAll('Хж', 'Ӿ')
		.replaceAll('хж', 'ӿ')

		.replaceAll('Вл', 'Ԝ')
		.replaceAll('вл', 'ԝ')

		.replaceAll('Вс', 'V')
		.replaceAll('вс', 'v')

		.replaceAll('Уа', 'Ӳ')
		.replaceAll('уа', 'ӳ')

		.replaceAll(/А[јй]/gu, 'Ӓ')
		.replaceAll(/а[јй]/gu, 'ӓ')

		.replaceAll(/И[јй]/gu, 'Ӥ')
		.replaceAll(/и[јй]/gu, 'ӥ')

		.replaceAll(/У[јй]/gu, 'Ӱ')
		.replaceAll(/у[јй]/gu, 'ӱ')

		.replaceAll(/Е[јй]/gu, 'Ё')
		.replaceAll(/е[јй]/gu, 'ё')

		.replaceAll('Ол', 'Ѽл')
		.replaceAll('ол', 'ѽл')

		.replaceAll(/О[јй]/gu, 'Ӧ')
		.replaceAll(/о[јй]/gu, 'ӧ')

		.replaceAll('Цх', '')
		.replaceAll('цх', '')

		.replaceAll('Ає', 'Ӑ')
		.replaceAll('ає', 'ӑ')

		.replaceAll('Цн', 'Ꙡ')
		.replaceAll('цн', 'ꙡ')

		.replaceAll('Ор', 'Ꙍр')
		.replaceAll('ор', 'ꙍр')

		.replaceAll('Кх', 'Қ')
		.replaceAll('кх', 'қ')

		.replaceAll('Жр', 'Җ')
		.replaceAll('жр', 'җ')

		.replaceAll('Зл', 'Ҙ')
		.replaceAll('зл', 'ҙ')

		.replaceAll('Нк', 'Ң')
		.replaceAll('нк', 'ң')

		.replaceAll('Тк', 'Ҭ')
		.replaceAll('тк', 'ҭ')

		.replaceAll('Хт', 'Ҳ')
		.replaceAll('хт', 'ҳ')

		.replaceAll('Хш', 'Ԧ')
		.replaceAll('хш', 'ԧ')

		.replaceAll('Хм', '')
		.replaceAll('хм', '')

		.replaceAll('Чм', 'Ҷ')
		.replaceAll('чм', 'ҷ')

		.replaceAll('Чт', 'Ҷ̈')
		.replaceAll('чт', 'ҷ̈')

		.replaceAll('Чл', 'Ӌ')
		.replaceAll('чл', 'ӌ')

		.replaceAll('Ч̣', 'Чх')
		.replaceAll('ч̣', 'чх')

		.replaceAll('Ҷах', 'Ҷ̣а')
		.replaceAll('ҷах', 'ҷ̣а')

		.replaceAll('Лч', 'Ԡ')
		.replaceAll('лч', 'ԡ')

		.replaceAll('Тр', 'Ꚋ')
		.replaceAll('тр', 'ꚋ')

		.replaceAll('Лф', 'Ӆ')
		.replaceAll('лф', 'ӆ')

		.replaceAll('Юї', 'Ю̆')
		.replaceAll('юї', 'ю̆')

		.replaceAll('Нд', 'Ӊ')
		.replaceAll('нд', 'ӊ')

		.replaceAll('Хл', 'Ӽ')
		.replaceAll('хл', 'ӽ')

		.replaceAll('Лк', 'Ԓ')
		.replaceAll('лк', 'ԓ')

		.replaceAll('Еа', '')
		.replaceAll('еа', '')

		.replaceAll('Еу', 'Ӗ')
		.replaceAll('еу', 'ӗ')

		.replaceAll('Гх', 'Ƣ')
		.replaceAll('гх', 'ƣ')

		.replaceAll('Нх', '')
		.replaceAll('нх', '')

		.replaceAll('Хн', '')
		.replaceAll('хн', '')

		.replaceAll('Ій', 'Ꙇ')
		.replaceAll('ій', 'ꙇ')

		.replaceAll(/Цць[іюяє]/gu, (m) => '̄' + m[3])
		.replaceAll(/цць[іюяє]/gu, (m) => '̄' + m[3])

		.replaceAll(/Ць[іюяє]/gu, (m) => '' + m[2])
		.replaceAll(/ць[іюяє]/gu, (m) => '' + m[2])

		.replaceAll(/Тть[іюяє]/gu, (m) => 'Ԏ̄' + m[3])
		.replaceAll(/тть[іюяє]/gu, (m) => 'ԏ̄' + m[3])

		.replaceAll(/Ть[іюяє]/gu, (m) => 'Ԏ' + m[2])
		.replaceAll(/ть[іюяє]/gu, (m) => 'ԏ' + m[2])

		.replaceAll(/Лль[яює]/gu, (m) => 'Ԉ̄' + m[3])
		.replaceAll(/лль[яює]/gu, (m) => 'ԉ̄' + m[3])

		.replaceAll(/Ль[яює]/gu, (m) => 'Ԉ' + m[2])
		.replaceAll(/ль[яює]/gu, (m) => 'ԉ' + m[2])

		.replaceAll('Лльі', '̄і')
		.replaceAll('лльі', '̄і')

		.replaceAll('Льі', 'і')
		.replaceAll('льі', 'і')

		.replaceAll(/Ннь[іяює]/gu, (m) => 'Ԋ̄' + m[3])
		.replaceAll(/ннь[іяює]/gu, (m) => 'ԋ̄' + m[3])

		.replaceAll(/Нь[іяює]/gu, (m) => 'Ԋ' + m[2])
		.replaceAll(/нь[іяює]/gu, (m) => 'ԋ' + m[2])

		.replaceAll(/Ддь[яє]/gu, (m) => 'Ԃ̄' + m[3])
		.replaceAll(/ддь[яє]/gu, (m) => 'ԃ̄' + m[3])

		.replaceAll(/Дь[яє]/gu, (m) => 'Ԃ' + m[2])
		.replaceAll(/дь[яє]/gu, (m) => 'ԃ' + m[2])

		.replaceAll('Ддьі', 'Ђ̄і')
		.replaceAll('ддьі', 'ђ̄і')

		.replaceAll('Дьі', 'Ђі')
		.replaceAll('дьі', 'ђі')

		.replaceAll(/Ззь[іяює]/gu, (m) => 'Ԅ̄' + m[3])
		.replaceAll(/ззь[іяює]/gu, (m) => 'ԅ̄' + m[3])

		.replaceAll(/Зь[іяює]/gu, (m) => 'Ԅ' + m[2])
		.replaceAll(/зь[іяює]/gu, (m) => 'ԅ' + m[2])

		.replaceAll(/Ссь[іяює]/gu, (m) => 'Ԍ̄' + m[3])
		.replaceAll(/ссь[іяює]/gu, (m) => 'ԍ̄' + m[3])

		.replaceAll(/Сь[іяює]/gu, (m) => 'Ԍ' + m[2])
		.replaceAll(/сь[іяює]/gu, (m) => 'ԍ' + m[2])

		.replaceAll(/[бпвмфБПВМФ]е/gu, (m) => m[0] + 'ѣ')
		.replaceAll(/[бпвмфБПВМФ]ей/gu, (m) => m[0] + 'ѣ̈')
		.replaceAll(/[бпвмфБПВМФ]ҍє/gu, (m) => m[0] + 'ҍꙓ')

		.replaceAll(/[бпвмфБПВМФ]ию/gu, (m) => m[0] + 'ы̄')
		.replaceAll(/[бпвмфБПВМФ]ӥ/gu, (m) => m[0] + 'ӹ')
		.replaceAll(/[бпвмфБПВМФ]иє/gu, (m) => m[0] + 'ы̆')
		.replaceAll(/[бпвмфБПВМФ]иш/gu, (m) => m[0] + 'ш')
		.replaceAll(/[бпвмфБПВМФ]ил/gu, (m) => m[0] + 'ыл')
		.replaceAll(/[бпвмфБПВМФ]и/gu, (m) => m[0] + 'ꙑ')

		.replaceAll(/[бпвмфБПВМФ]ӓ̄/gu, (m) => m[0] + 'ӛ̄')
		.replaceAll(/[бпвмфБПВМФ]а̄/gu, (m) => m[0] + 'ә̄')
		.replaceAll(/[бпвмфБПВМФ]а/gu, (m) => m[0] + 'ә')
		.replaceAll(/[бпвмфБПВМФ]ӓ/gu, (m) => m[0] + 'ӛ')
		.replaceAll(/[бпвмфБПВМФ]я/gu, (m) => m[0] + 'ҍә̃')

		.replaceAll(/[бпвмфБПВМФ]й/gu, (m) => m[0] + 'ҋ')

		.replaceAll(/Є[бпвмф]/gu, (m) => 'Ꙓ' + m[1])
		.replaceAll(/Е[бпвмф]/gu, (m) => 'Ѣ' + m[1])
		.replaceAll(/Ё[бпвмф]/gu, (m) => 'Ѣ̈' + m[2])

		.replaceAll(/Иш[бпвмф]/gu, (m) => 'ш' + m[2])
		.replaceAll(/Ил[бпвмф]/gu, (m) => 'Ыл' + m[2])
		.replaceAll(/Ию[бпвмф]/gu, (m) => 'Ы̄' + m[2])
		.replaceAll(/Ӥ[бпвмф]/gu, (m) => 'Ӹ' + m[2])
		.replaceAll(/Иє[бпвмф]/gu, (m) => 'Ы̆' + m[2])
		.replaceAll(/И[бпвмф]/gu, (m) => 'Ꙑ' + m[1])

		.replaceAll(/Ӓ̄[бпвмф]/gu, (m) => 'Ӛ̄' + m[1])
		.replaceAll(/А̄[бпвмф]/gu, (m) => 'Ә̄' + m[1])
		.replaceAll(/А[бпвмф]/gu, (m) => 'Ә' + m[1])
		.replaceAll(/Ӓ[бпвмф]/gu, (m) => 'Ӛ' + m[2])
		.replaceAll(/Я[бпвмф]/gu, (m) => 'Ә̃' + m[1])

		.replaceAll(/Й[бпвмф]/gu, (m) => 'Ҋ' + m[1])

		.replaceAll(/є[бпвмф]/gu, (m) => 'ꙓ' + m[1])
		.replaceAll(/е[бпвмф]/gu, (m) => 'ѣ' + m[1])
		.replaceAll(/ё[бпвмф]/gu, (m) => 'ѣ̈' + m[2])

		.replaceAll(/иш[бпвмф]/gu, (m) => 'ш' + m[2])
		.replaceAll(/ил[бпвмф]/gu, (m) => 'ы' + m[2])
		.replaceAll(/ию[бпвмф]/gu, (m) => 'ы̄' + m[2])
		.replaceAll(/ӥ[бпвмф]/gu, (m) => 'ӹ' + m[2])
		.replaceAll(/иє[бпвмф]/gu, (m) => 'ы̆' + m[2])
		.replaceAll(/и[бпвмф]/gu, (m) => 'ꙑ' + m[1])

		.replaceAll(/ӓ̄[бпвмф]/gu, (m) => 'ӛ̄' + m[1])
		.replaceAll(/а̄[бпвмф]/gu, (m) => 'ә̄' + m[1])
		.replaceAll(/а[бпвмф]/gu, (m) => 'ә' + m[1])
		.replaceAll(/ӓ[бпвмф]/gu, (m) => 'ӛ' + m[2])
		.replaceAll(/я[бпвмф]/gu, (m) => 'ә̃' + m[1])

		.replaceAll(/й[бпвмф]/gu, (m) => 'ҋ' + m[1])

		.replaceAll('Іп', 'Υп')
		.replaceAll('іп', 'υп')
		.replaceAll('пі', 'υп')

		.replaceAll('Пс', 'Ѱ')
		.replaceAll('пс', 'ѱ')

		.replaceAll('Фт', 'Ѳ')
		.replaceAll('фт', 'ѳ')

		.replaceAll('Вт', 'Ꚍ̆')
		.replaceAll('вт', 'ꚍ̆')

		.replaceAll('Хв', 'Ꚕ')
		.replaceAll('хв', 'ꚕ')

		.replaceAll('Пр', 'Ҧ')
		.replaceAll('пр', 'ҧ')

		.replaceAll('Мр', 'Ӎ')
		.replaceAll('мр', 'ӎ')

		.replaceAll('Пл', 'Ԥ')
		.replaceAll('пл', 'ԥ')

		.replaceAll('Св', 'Ҫ')
		.replaceAll('св', 'ҫ')

		.replaceAll('Лм', 'Ԯ')
		.replaceAll('лм', 'ԯ')

		.replaceAll('Вк', 'К̑')
		.replaceAll('вк', 'к̑')

		.replaceAll('Зжв', 'Ꚅ̆')
		.replaceAll('зжв', 'ꚅ̆')

		.replaceAll('Тв', 'Ꚍ')
		.replaceAll('тв', 'ꚍ')

		.replaceAll('Дв', 'Ꚁ')
		.replaceAll('дв', 'ꚁ')

		.replaceAll('Км', 'Ԛ')
		.replaceAll('км', 'ԛ')

		.replaceAll('Дзв', 'ꚃ')
		.replaceAll('дзв', 'ꚃ')

		.replaceAll('Вч', 'Ҽ')
		.replaceAll('вч', 'ҽ')

		.replaceAll('Чв', 'Ҽ̆')
		.replaceAll('чв', 'ҽ̆')

		.replaceAll('Зб', 'Ӡ')
		.replaceAll('зб', 'ӡ')

		.replaceAll('Бл', 'Ꞵ')
		.replaceAll('бл', 'ꞵ')

		.replaceAll('Шв', 'Ꚗ')
		.replaceAll('шв', 'ꚗ')

		.replaceAll('Вш', 'Ꚗ̆')
		.replaceAll('вш', 'ꚗ̆')

		.replaceAll('Цв', 'Ꚏ')
		.replaceAll('цв', 'ꚏ')

		.replaceAll('Вц', 'Ꚏ̆')
		.replaceAll('вц', 'ꚏ̆')

		.replaceAll('Ув', 'Ў')
		.replaceAll('ув', 'ў')

		.replaceAll('Мг', 'Ꙧ')
		.replaceAll('мг', 'ꙧ')

		.replaceAll('Дм', 'D')
		.replaceAll('дм', 'd')

		.replaceAll(/Є[јй]/gu, 'Є̈')
		.replaceAll(/є[јй]/gu, 'є̈')

		.replaceAll(/Ю[јй]/gu, 'Ю')
		.replaceAll(/ю[јй]/gu, 'ю̈')

		.replaceAll(/Я[јй]/gu, 'Я̈')
		.replaceAll(/я[јй]/gu, 'я̈')

		.replaceAll(/Іо[нњԋ]/gu, (m) => '' + m[2])
		.replaceAll(/іо[нњԋ]/gu, (m) => '' + m[2])

		.replaceAll(/Йо[нњԋ]/gu, (m) => 'Ѭ' + m[2])
		.replaceAll(/йо[нњԋ]/gu, (m) => 'ѭ' + m[2])

		.replaceAll(/А[нњԋ]/gu, (m) => 'Ѧ' + m[1])
		.replaceAll(/а[нњԋ]/gu, (m) => 'ѧ' + m[1])

		.replaceAll(/Я[нњԋ]/gu, (m) => 'Ѩ' + m[1])
		.replaceAll(/я[нњԋ]/gu, (m) => 'ѩ' + m[1])

		.replaceAll(/О[нњԋ]/gu, (m) => 'Ѫ' + m[1])
		.replaceAll(/о[нњԋ]/gu, (m) => 'ѫ' + m[1])

		.replaceAll(/Е[нњԋ]/gu, (m) => 'Ꙙ' + m[1])
		.replaceAll(/е[нњԋ]/gu, (m) => 'ꙙ' + m[1])

		.replaceAll(/Є[нњԋ]/gu, (m) => 'Ꙝ' + m[1])
		.replaceAll(/є[нњԋ]/gu, (m) => 'ꙝ' + m[1])

		.replaceAll(/І[нњԋ]/gu, (m) => 'Ꙛ' + m[1])
		.replaceAll(/і[нњԋ]/gu, (m) => 'ꙛ' + m[1])

		.replaceAll(/Ї[нњԋ]/gu, (m) => '' + m[1])
		.replaceAll(/ї[нњԋ]/gu, (m) => '' + m[1])

		.replaceAll('Ау', '')
		.replaceAll('ау', '')

		.replaceAll('Хп', 'Ҩ')
		.replaceAll('хп', 'ҩ')

		.replaceAll('Іу', '')
		.replaceAll('іу', '')

		.replaceAll('Ґр', 'G')
		.replaceAll('ґр', 'g')

		.replaceAll(/дд|тт|зз|сс|цц|лл|нн|жж|шш|рр|вв|кк/gu, (m) => m[0] + '̄')
		.replaceAll(/Дд|Тт|Зз|Сс|Цц|Лл|Нн|Жж|Шш|Рр|Вв|Кк/gu, (m) => m[0] + '̄');
}

function endOfWordTo(str) {
	const res = str
		.replaceAll(',', ' , ')
		.replaceAll('.', ' . ')
		.replaceAll('!', ' ! ')
		.replaceAll('?', ' ? ')
		.replaceAll(';', ' ; ')
		.replaceAll(':', ' : ')
		.replaceAll('-', ' - ');

	const words = res.split(' ');

	for (let i = 0; i < words.length; i++) {
		if (consonantLetters.includes(words[i][words[i].length - 1])) {
			words[i] = words[i].concat('ꙏ');
		} else if (words[i][words[i].length - 1] === 'й') {
			const wordArr = words[i].split('');

			wordArr.push('ᵸ');

			words[i] = wordArr.join('');
		}
	}

	return words
		.join(' ')
		.replaceAll(' , ', ',')
		.replaceAll(' . ', '.')
		.replaceAll(' ! ', '!')
		.replaceAll(' ? ', '?')
		.replaceAll(' ; ', ';')
		.replaceAll(' : ', ':')
		.replaceAll(' - ', '-');
}

export function translateTo(text) {
	const res = replaceTo(endOfWordTo(text));
	return res;
}
