import { consonantLetters } from './constants.js';

function replaceTo(str) {
	return str
		.replaceAll(
			/[жчшкхгґщбпвмфБПВМФЩЖЧШКХГҐ][іяює]/gu,
			(m) => m[0] + 'ҍ' + m[1],
		)

		.replaceAll('Льо', 'Љӏ')
		.replaceAll('льо', 'љӏ')

		.replaceAll('Ньо', 'Њӏ')
		.replaceAll('ньо', 'њӏ')

		.replaceAll('Тьо', 'Ᲊӏ')
		.replaceAll('тьо', 'ᲊӏ')

		.replaceAll('Дьо', 'Ԁӏ')
		.replaceAll('дьо', 'ԁӏ')

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

		.replaceAll(/ь[яюєї]/gu, (m) => 'ьˮ' + m[1])

		.replaceAll(/[НнЛлТтДдЗзСсЦц][іяює]/gu, (m) => m[0] + 'ь' + m[1])

		.replaceAll('Ае', 'Ӕ')
		.replaceAll('ае', 'ӕ')

		.replaceAll('Джмі', 'Ꙉмҍі')
		.replaceAll('джмі', 'ꙉмҍі')

		.replaceAll(/Джҍ[іяює]/gu, (m) => 'Ꙉ' + m[3])
		.replaceAll(/джҍ[іяює]/gu, (m) => 'ꙉ' + m[3])

		.replaceAll('Дж', 'Ԫ')
		.replaceAll('дж', 'ԫ')

		.replaceAll('Дзе', 'Ꙃ')
		.replaceAll('дзе', 'ꙃ')

		.replaceAll('Дзьо', 'Ԇӏ')
		.replaceAll('дзьо', 'ԇӏ')

		.replaceAll(/Дз[іяює]/gu, (m) => 'Ԇ' + m[2])
		.replaceAll(/дз[іяює]/gu, (m) => 'ԇ' + m[2])
		.replaceAll('дԅ', 'ԇ')

		.replaceAll('Дзв', 'ꚃ')
		.replaceAll('дзв', 'ꚃ')

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

		.replaceAll('Пс', 'Ѱ')
		.replaceAll('пс', 'ѱ')

		.replaceAll('Фт', 'Ѳ')
		.replaceAll('фт', 'ѳ')

		.replaceAll('Дн', 'Ԁ')
		.replaceAll('дн', 'ԁ')

		.replaceAll('Жҍю', 'Ӝ')
		.replaceAll('жҍю', 'ӝ')

		.replaceAll('Зню', 'Ԑ̈')
		.replaceAll('зню', 'ԑ̈')

		.replaceAll('Кҍю', 'К̈')
		.replaceAll('кҍю', 'к̈')

		.replaceAll('Вт', 'Ꚍ̆')
		.replaceAll('вт', 'ꚍ̆')

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

		.replaceAll('Цю', 'Ц̈')
		.replaceAll('цю', 'ц̈')

		.replaceAll(/Дв[іяєю]/gu, (m) => '' + m[2])
		.replaceAll(/дв[іяєю]/gu, (m) => '' + m[2])

		.replaceAll('Ан', 'Ѧн')
		.replaceAll('ан', 'ѧн')

		.replaceAll('Ян', 'Ѩн')
		.replaceAll('ян', 'ѩн')

		.replaceAll('Іон', 'н')
		.replaceAll('іон', 'н')

		.replaceAll('Йон', 'Ѭн')
		.replaceAll('йон', 'ѭн')

		.replaceAll('Он', 'Ѫн')
		.replaceAll('он', 'ѫн')

		.replaceAll('Ен', 'Ꙙн')
		.replaceAll('ен', 'ꙙн')

		.replaceAll('Єн', 'Ꙝн')
		.replaceAll('єн', 'ꙝн')

		.replaceAll('Ін', 'Ꙛн')
		.replaceAll('ін', 'ꙛн')

		.replaceAll('Хс', '')
		.replaceAll('хс', '')

		.replaceAll('Ст', 'Ѕ')
		.replaceAll('ст', 'ѕ')

		.replaceAll('Нг', 'Ҥ')
		.replaceAll('нг', 'ҥ')

		.replaceAll('Дг', 'Ꙣ')
		.replaceAll('дг', 'ꙣ')

		.replaceAll('Лг', 'Ꙥ')
		.replaceAll('лг', 'ꙥ')

		.replaceAll('Мг', 'Ꙧ')
		.replaceAll('мг', 'ꙧ')

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

		.replaceAll('Єр', 'Ъ̈р')
		.replaceAll('єр', 'ъ̈р')

		.replaceAll('Ер', 'Ър')
		.replaceAll('ер', 'ър')

		.replaceAll('Єєв', 'Ӭ̄в')
		.replaceAll('єєв', 'ӭ̄в')

		.replaceAll('Ил', 'Ыл')
		.replaceAll('ил', 'ыл')

		.replaceAll('Чҍі', 'Ћҍі')
		.replaceAll('чҍі', 'ћҍі')

		.replaceAll(/Чҍ[яює]/gu, (m) => 'ҍ' + m[2])
		.replaceAll(/чҍ[яює]/gu, (m) => 'ҍ' + m[2])

		.replaceAll(/Ч[аеу]/gu, (m) => '' + m[1])
		.replaceAll(/ч[аеу]/gu, (m) => '' + m[1])

		.replaceAll(/[жшЖШ]ив/gu, (m) => m[0] + 'ы̆')
		.replaceAll(/[жшЖШ]ий/gu, (m) => m[0] + 'ӹъ')
		.replaceAll(/[жшЖШ]ию/gu, (m) => m[0] + 'ы̄')

		.replaceAll(/[жш]и/gu, (m) => m[0] + 'ы')
		.replaceAll(/[ЖШ]и/gu, (m) => m[0] + 'ы')

		.replaceAll(/И[жш]/gu, (m) => 'Ы' + m[1])
		.replaceAll(/и[жш]/gu, (m) => 'ы' + m[1])

		.replaceAll('Оєв', 'Ө̆')
		.replaceAll('оєв', 'Ө̆')

		.replaceAll('Ин', 'Ꙟн')
		.replaceAll('ин', 'ꙟн')

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

		.replaceAll('Оє', 'Ө')
		.replaceAll('оє', 'ө')

		.replaceAll('Хв', 'Ꚕ')
		.replaceAll('хв', 'ꚕ')

		.replaceAll('Хр', 'Һ')
		.replaceAll('хр', 'һ')

		.replaceAll('Км', 'Ԛ')
		.replaceAll('км', 'ԛ')

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

		.replaceAll('Тв', 'Ꚍ')
		.replaceAll('тв', 'ꚍ')

		.replaceAll('Дв', 'Ꚁ')
		.replaceAll('дв', 'ꚁ')

		.replaceAll('Ир', 'Ѵр')
		.replaceAll('ир', 'ѵр')

		.replaceAll('Дво', 'Двꙫ')
		.replaceAll('дво', 'двꙫ')

		.replaceAll('Обө', 'Ꙫбє')
		.replaceAll('обө', 'ꙫбє')

		.replaceAll(/О(кр|хр)/gu, (_, group) => 'Ꚛ' + group)
		.replaceAll(/о(кр|хр)/gu, (_, group) => 'ꚛ' + group)

		.replaceAll('Багато', 'Багтꙮ')
		.replaceAll('багато', 'багтꙮ')

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

		.replaceAll('Йо', 'Јо')
		.replaceAll('йо', 'јо')

		.replaceAll('Зжв', 'Ꚅ̆')
		.replaceAll('зжв', 'ꚅ̆')

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

		.replaceAll('Вч', 'Ҽ')
		.replaceAll('вч', 'ҽ')

		.replaceAll('Чв', 'Ҽ̆')
		.replaceAll('чв', 'ҽ̆')

		.replaceAll('Зб', 'Ӡ')
		.replaceAll('зб', 'ӡ')

		.replaceAll('Юю', 'Ю̄')
		.replaceAll('юю', 'ю̄')

		.replaceAll('Яя', 'Я̄')
		.replaceAll('яя', 'я̄')

		.replaceAll('Ое', 'О̆')
		.replaceAll('ое', 'о̆')

		.replaceAll('Ює', 'Ӫ')
		.replaceAll('ює', 'ӫ')

		.replaceAll('Тет', 'Θ')
		.replaceAll('тет', 'ϑ')

		.replaceAll('Тх', 'Т̓')
		.replaceAll('тх', 'т̓')

		.replaceAll('Рк', 'Р̌')
		.replaceAll('рк', 'р̌')

		.replaceAll(/Зв|Зг|Зд|Зс|Зт|Зх/gu, (m) => m[1].toUpperCase() + '̌')
		.replaceAll(/зв|зг|зд|зс|зт|зх/gu, (m) => m[1] + '̌')

		.replaceAll('Ао', 'А̊')
		.replaceAll('ао', 'а̊')

		.replaceAll('Уо', 'У̊')
		.replaceAll('уо', 'у̊')

		.replaceAll('Гр', 'Ӻ')
		.replaceAll('гр', 'ӻ')

		.replaceAll('Гн', 'Ғ')
		.replaceAll('гн', 'ғ')

		.replaceAll('Гл', 'Ғ̌')
		.replaceAll('гл', 'ғ̌')

		.replaceAll('Гд', 'Ӷ')
		.replaceAll('гд', 'ӷ')

		.replaceAll('Гв', 'Ҕ')
		.replaceAll('гв', 'ҕ')

		.replaceAll('Кр', 'Ԟ')
		.replaceAll('кр', 'ԟ')

		.replaceAll('Кн', 'Ҡ')
		.replaceAll('кн', 'ҡ')

		.replaceAll('Кц', 'К̆')
		.replaceAll('кц', 'к̆')

		.replaceAll('Кв', '')
		.replaceAll('кв', '')

		.replaceAll('Вк', 'К̑')
		.replaceAll('вк', 'к̑')

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

		.replaceAll('Нч', 'Ӈ')
		.replaceAll('нч', 'ӈ')

		.replaceAll('Нс', 'Ԩ')
		.replaceAll('нс', 'ԩ')

		.replaceAll('Хж', 'Ӿ')
		.replaceAll('хж', 'ӿ')

		.replaceAll('Вл', 'Ԝ')
		.replaceAll('вл', 'ԝ')

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

		.replaceAll('Цн', '')
		.replaceAll('цн', '')

		.replaceAll('Цм', 'Ꙡ')
		.replaceAll('цм', 'ꙡ')

		.replaceAll('Ор', 'Ꙍр')
		.replaceAll('ор', 'ꙍр')

		.replaceAll('Кх', 'Қ')
		.replaceAll('кх', 'қ')

		.replaceAll('Жр', 'Җ')
		.replaceAll('жр', 'җ')

		.replaceAll('Зл', 'Ҙ')
		.replaceAll('зл', 'ҙ')

		.replaceAll('Лм', 'Ԯ')
		.replaceAll('лм', 'ԯ')

		.replaceAll('Нз', 'Ң')
		.replaceAll('нз', 'ң')

		.replaceAll('Пл', 'Ԥ')
		.replaceAll('пл', 'ԥ')

		.replaceAll('Св', 'Ҫ')
		.replaceAll('св', 'ҫ')

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

		.replaceAll('Шл', 'Ԡ')
		.replaceAll('шл', 'ԡ')

		.replaceAll('Пр', 'Ҧ')
		.replaceAll('пр', 'ҧ')

		.replaceAll('Тр', 'Ꚋ')
		.replaceAll('тр', 'ꚋ')

		.replaceAll('Лф', 'Ӆ')
		.replaceAll('лф', 'ӆ')

		.replaceAll('Юв', 'Ю̆')
		.replaceAll('юв', 'ю̆')

		.replaceAll('Мр', 'Ӎ')
		.replaceAll('мр', 'ӎ')

		.replaceAll('Нк', 'Ӊ')
		.replaceAll('нк', 'ӊ')

		.replaceAll('Хл', 'Ӽ')
		.replaceAll('хл', 'ӽ')

		.replaceAll('Лк', 'Ԓ')
		.replaceAll('лк', 'ԓ')

		.replaceAll('Еа', '')
		.replaceAll('еа', '')

		.replaceAll('Еу', 'Ӗ')
		.replaceAll('еу', 'ӗ')

		.replaceAll('Гх', '')
		.replaceAll('гх', '')

		.replaceAll('Хн', '')
		.replaceAll('хн', '')

		.replaceAll('Бл', 'Ꞵ')
		.replaceAll('бл', 'ꞵ')

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
		.replaceAll(/[бпвмфБПВМФ]ҍє/gu, (m) => m[0] + 'ҍꙓ')
		.replaceAll(/[бпвмфБПВМФ]ҍі/gu, (m) => m[0] + 'ҍꙇ')
		.replaceAll(/[бпвмфБПВМФ]и/gu, (m) => m[0] + 'ꙑ')
		.replaceAll(/[бпвмфБПВМФ]ая/gu, (m) => m[0] + 'ӛ̄')
		.replaceAll(/[бпвмфБПВМФ]аа/gu, (m) => m[0] + 'ә̄')
		.replaceAll(/[бпвмфБПВМФ]а/gu, (m) => m[0] + 'ә')
		.replaceAll(/[бпвмфБПВМФ]ҍя/gu, (m) => m[0] + 'ҍӛ')

		.replaceAll(/Є[бпвмф]/gu, (m) => 'Ꙓ' + m[1])
		.replaceAll(/Е[бпвмф]/gu, (m) => 'Ѣ' + m[1])
		.replaceAll(/И[бпвмф]/gu, (m) => 'Ꙑ' + m[1])
		.replaceAll(/І[бпвмф]/gu, (m) => 'Ꙇ' + m[1])
		.replaceAll(/Ая[бпвмф]/gu, (m) => 'Ӛ̄' + m[1])
		.replaceAll(/Аа[бпвмф]/gu, (m) => 'Ә̄' + m[1])
		.replaceAll(/А[бпвмф]/gu, (m) => 'Ә' + m[1])
		.replaceAll(/Я[бпвмф]/gu, (m) => 'Ӛ' + m[1])

		.replaceAll(/є[бпвмф]/gu, (m) => 'ꙓ' + m[1])
		.replaceAll(/е[бпвмф]/gu, (m) => 'ѣ' + m[1])
		.replaceAll(/и[бпвмф]/gu, (m) => 'ꙑ' + m[1])
		.replaceAll(/і[бпвмф]/gu, (m) => 'ꙇ' + m[1])
		.replaceAll(/ая[бпвмф]/gu, (m) => 'ӛ̄' + m[1])
		.replaceAll(/аа[бпвмф]/gu, (m) => 'ә̄' + m[1])
		.replaceAll(/а[бпвмф]/gu, (m) => 'ә' + m[1])
		.replaceAll(/я[бпвмф]/gu, (m) => 'ӛ' + m[1])

		.replaceAll(/[бпвмфБПВМФ][яю]/gu, (m) => m[0] + 'ҍ' + m[1])

		.replaceAll(/Є[јй]/gu, 'Є̈')
		.replaceAll(/є[јй]/gu, 'є̈')

		.replaceAll(/І[јй]/gu, 'Ҋ')
		.replaceAll(/і[јй]/gu, 'ҋ')

		.replaceAll(/Ю[јй]/gu, 'Ю')
		.replaceAll(/ю[јй]/gu, 'ю̈')

		.replaceAll(/Я[јй]/gu, 'Я̈')
		.replaceAll(/я[јй]/gu, 'я̈')

		.replaceAll('Іо', 'Ҩ')
		.replaceAll('іо', 'ҩ')

		.replaceAll('Іу', '')
		.replaceAll('іу', '')

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
