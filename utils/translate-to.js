import { consonantLetters, finalSoftLetters } from './constants.js';

function replaceTo(str) {
	return str
		.replaceAll(/[жчшкхгґщЩЖЧШКХГҐ][іяює]/gu, (m) => m[0] + 'ҍ' + m[1])

		.replaceAll('Ае', 'Ӕ')
		.replaceAll('ае', 'ӕ')

		.replaceAll('Дже', 'Ꙉ')
		.replaceAll('дже', 'ꙉ')

		.replaceAll('Дж', 'Ԫ')
		.replaceAll('дж', 'ԫ')

		.replaceAll('Джмҍі', 'Ђмҍі')
		.replaceAll('джмҍі', 'ђмҍі')

		.replaceAll(/Джҍ[іяює]/gu, (m) => 'Ђ' + m[3])
		.replaceAll(/джҍ[іяює]/gu, (m) => 'ђ ' + m[3])

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

		.replaceAll('Йоу', 'І̵Ꙋ')
		.replaceAll('йоу', 'І̵ꙋ')

		.replaceAll('Оу', 'Ꙋ')
		.replaceAll('оу', 'ꙋ')

		.replaceAll('Тс', 'Ꚑ')
		.replaceAll('тс', 'ꚑ')

		.replaceAll('Ойо', 'Ӧ̄')
		.replaceAll('ойо', 'ӧ̄')

		.replaceAll('Іо', 'Ҩ')
		.replaceAll('іо', 'ҩ')

		.replaceAll('От', 'Ѿ')
		.replaceAll('от', 'ѿ')

		.replaceAll('Кс', 'Ѯ')
		.replaceAll('кс', 'ѯ')

		.replaceAll('Пс', 'Ѱ')
		.replaceAll('пс', 'ѱ')

		.replaceAll('Фт', 'Ѳ')
		.replaceAll('фт', 'ѳ')

		.replaceAll('Льо', 'Љӏ')
		.replaceAll('льо', 'љӏ')

		.replaceAll('Ньо', 'Њӏ')
		.replaceAll('ньо', 'њӏ')

		.replaceAll('Тьо', 'Ᲊӏ')
		.replaceAll('тьо', 'ᲊӏ')

		.replaceAll('Дьо', 'Ԁӏ')
		.replaceAll('дьо', 'ԁӏ')

		.replaceAll('Цьо', 'Ꙡӏ')
		.replaceAll('цьо', 'ꙡӏ')

		.replaceAll('ьо', 'ӏ')

		.replaceAll('Да', 'Ԁ')
		.replaceAll('да', 'ԁ')

		.replaceAll(/ь[яюєї]/gu, (m) => 'ьˮ' + m[1])
		.replaceAll('Жҍю', 'Ӝ')
		.replaceAll('жҍю', 'ӝ')

		.replaceAll('Зню', 'Ԑ̈')
		.replaceAll('зню', 'ԑ̈')

		.replaceAll('Кҍю', 'К̈')
		.replaceAll('кҍю', 'к̈')

		.replaceAll('Тю', 'Т̈')
		.replaceAll('тю', 'т̈')

		.replaceAll('Чҍю', 'Ӵ')
		.replaceAll('чҍю', 'ӵ')

		.replaceAll('Дю', 'Д̈')
		.replaceAll('дю', 'д̈')

		.replaceAll('Зю', 'Ӟ')
		.replaceAll('зю', 'ӟ')

		.replaceAll('Цю', 'Ц̈')
		.replaceAll('цю', 'ц̈')

		.replaceAll(/[рцРЦ][іяює]/gu, (m) => m[0] + 'ь' + m[1])

		.replaceAll(/Т[іяє]/gu, (m) => 'Ԏ' + m[1])
		.replaceAll(/т[іяє]/gu, (m) => 'ԏ' + m[1])

		.replaceAll(/Л[іяює]/gu, (m) => 'Ԉ' + m[1])
		.replaceAll(/л[іяює]/gu, (m) => 'ԉ' + m[1])

		.replaceAll(/Н[іяює]/gu, (m) => 'Ԋ' + m[1])
		.replaceAll(/н[іяює]/gu, (m) => 'ԋ' + m[1])

		.replaceAll(/Д[іяює]/gu, (m) => 'Ԃ' + m[1])
		.replaceAll(/д[іяює]/gu, (m) => 'ԃ' + m[1])

		.replaceAll(/З[іяює]/gu, (m) => 'Ԅ' + m[1])
		.replaceAll(/з[іяює]/gu, (m) => 'ԅ' + m[1])

		.replaceAll(/С[іяює]/gu, (m) => 'Ԍ' + m[1])
		.replaceAll(/с[іяює]/gu, (m) => 'ԍ' + m[1])

		.replaceAll('Ан', 'Ѧн')
		.replaceAll('ан', 'ѧн')

		.replaceAll('Ян', 'Ѩн')
		.replaceAll('ян', 'ѩн')

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

		.replaceAll('Ль', 'Љ')
		.replaceAll('ль', 'љ')

		.replaceAll('Нь', 'Њ')
		.replaceAll('нь', 'њ')

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

		.replaceAll('Де', 'Δе')
		.replaceAll('де', 'δе')

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

		.replaceAll(/Чҍ[іяє]/gu, (m) => 'Ћҍ' + m[2])
		.replaceAll(/чҍ[іяє]/gu, (m) => 'ћҍ' + m[2])

		.replaceAll(/[жшЖШ]ив/gu, (m) => m[0] + 'ы̆')
		.replaceAll(/[жшЖШ]ијъ/gu, (m) => m[0] + 'ӹъ')
		.replaceAll(/[жшЖШ]ию/gu, (m) => m[0] + 'ы̄')

		.replaceAll(/[жш]и/gu, (m) => m[0] + 'ы')
		.replaceAll(/[ЖШ]и/gu, (m) => m[0] + 'ы')

		.replaceAll(/И[жш]/gu, (m) => 'Ы' + m[1])
		.replaceAll(/и[жш]/gu, (m) => 'ы' + m[1])

		.replaceAll('Оєв', 'Ө̆')
		.replaceAll('оєв', 'Ө̆')

		.replaceAll(/[бпвмфБПВМФ]е/gu, (m) => m[0] + 'ѣ')
		.replaceAll(/[бпвмфБПВМФ]є/gu, (m) => m[0] + 'ҍꙓ')
		.replaceAll(/[бпвмфБПВМФ]і/gu, (m) => m[0] + 'ҍꙇ')
		.replaceAll(/[бпвмфБПВМФ]и/gu, (m) => m[0] + 'ꙑ')
		.replaceAll(/[бпвмфБПВМФ]ая/gu, (m) => m[0] + 'іӛ̄')
		.replaceAll(/[бпвмфБПВМФ]аа/gu, (m) => m[0] + 'ә̄')
		.replaceAll(/[бпвмфБПВМФ]а/gu, (m) => m[0] + 'ә')
		.replaceAll(/[бпвмфБПВМФ]я/gu, (m) => m[0] + 'ҍӛ')

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

		.replaceAll('Ть', 'Ᲊ')
		.replaceAll('ть', 'ᲊ')

		.replaceAll('Ин', 'Ꙟ')
		.replaceAll('ин', 'ꙟ')

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

		.replaceAll('Вт', 'Ꚍ̆')
		.replaceAll('вт', 'ꚍ̆')

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

		.replaceAll('Че', 'Ҿ')
		.replaceAll('че', 'ҿ')

		.replaceAll('Чк', 'Ҽ')
		.replaceAll('чк', 'ҽ')

		.replaceAll('Зб', 'Ӡ')
		.replaceAll('зб', 'ӡ')

		.replaceAll('Юю', 'Ю̄')
		.replaceAll('юю', 'ю̄')

		.replaceAll('Юв', 'Ю̆')
		.replaceAll('юв', 'ю̆')

		.replaceAll('Яя', 'Я̄')
		.replaceAll('яя', 'я̄')

		.replaceAll('Ов', 'О̆')
		.replaceAll('ов', 'о̆')

		.replaceAll('Ює', 'Ӫ')
		.replaceAll('ює', 'ӫ')

		.replaceAll('Тет', 'Θ')
		.replaceAll('тет', 'ϑ')

		.replaceAll('Тх', 'Т̓')
		.replaceAll('тх', 'т̓')

		.replaceAll(/дд|тт|зз|сс|цц|лл|нн|жж|шш|рр|вв|кк/gu, (m) => m[0] + '̄')
		.replaceAll(/Дд|Тт|Зз|Сс|Цц|Лл|Нн|Жж|Шш|Рр|Вв|Кк/gu, (m) => m[0] + '̄')

		.replaceAll(/Зв|Зг|Зд|Зр|Зс|Зт|Зх/gu, (m) => m[1].toUpperCase() + '̌')
		.replaceAll(/зв|зг|зд|зр|зс|зт|зх/gu, (m) => m[1] + '̌')

		.replaceAll('Ао', 'А̊')
		.replaceAll('ао', 'а̊')

		.replaceAll('Уо', 'У̊')
		.replaceAll('уо', 'у̊')

		.replaceAll('Гр', 'Ӻ')
		.replaceAll('гр', 'ӻ')

		.replaceAll('Гн', 'Ғ')
		.replaceAll('гн', 'ғ')

		.replaceAll('Гол', 'Ҕол')
		.replaceAll('гол', 'ҕол')

		.replaceAll('Гл', 'Ғ̌')
		.replaceAll('гл', 'ғ̌')

		.replaceAll('Вг', 'Г̑')
		.replaceAll('вг', 'г̑')

		.replaceAll('Гв', 'Г̆')
		.replaceAll('гв', 'г̆')

		.replaceAll('Кр', 'Ԟ')
		.replaceAll('кр', 'ԟ')

		.replaceAll('Кн', 'Ҡ')
		.replaceAll('кн', 'ҡ')

		.replaceAll('Кв', 'К̆')
		.replaceAll('кв', 'к̆')

		.replaceAll('Вк', 'К̑')
		.replaceAll('вк', 'к̑')

		.replaceAll('Кл', 'Ҟ')
		.replaceAll('кл', 'ҟ')

		.replaceAll('Кб', 'Ӄ')
		.replaceAll('Кб', 'Ӄ')

		.replaceAll('Уе', 'Ү')
		.replaceAll('уе', 'ү')

		.replaceAll('Ує', 'Ұ')
		.replaceAll('ує', 'ұ')

		.replaceAll('Зн', 'Ԑ')
		.replaceAll('зн', 'ԑ')

		.replaceAll('Нч', 'Ӈ')
		.replaceAll('нч', 'ӈ')

		.replaceAll('Чн', 'Ԩ')
		.replaceAll('чн', 'ԩ')

		.replaceAll('Хж', 'Ӿ')
		.replaceAll('хж', 'ӿ')

		.replaceAll('Вл', 'Ԝ')
		.replaceAll('вл', 'ԝ')

		.replaceAll('Уа', 'Ӳ')
		.replaceAll('уа', 'ӳ')

		.replaceAll(/Є[јй]/gu, 'Є̈')
		.replaceAll(/є[јй]/gu, 'є̈')

		.replaceAll(/І[јй]/gu, 'Ҋ')
		.replaceAll(/і[јй]/gu, 'ҋ')

		.replaceAll(/А[јй]/gu, 'Ӓ')
		.replaceAll(/а[јй]/gu, 'ӓ')

		.replaceAll(/И[јй]/gu, 'Ӥ')
		.replaceAll(/и[јй]/gu, 'ӥ')

		.replaceAll(/У[јй]/gu, 'Ӱ')
		.replaceAll(/у[јй]/gu, 'ӱ')

		.replaceAll(/Е[јй]/gu, 'Ё')
		.replaceAll(/е[јй]/gu, 'ё')

		.replaceAll(/Ю[јй]/gu, 'Ю')
		.replaceAll(/ю[јй]/gu, 'ю̈')

		.replaceAll(/Я[јй]/gu, 'Я̈')
		.replaceAll(/я[јй]/gu, 'я̈')

		.replaceAll('Ол', 'Ѽл')
		.replaceAll('ол', 'ѽл')

		.replaceAll(/О[јй]/gu, 'Ӧ')
		.replaceAll(/о[јй]/gu, 'ӧ')

		.replaceAll(/[Ее]ц/gu, (m) => m[0] + 'ꙡ')

		.replaceAll('Ор', 'Ꙍр')
		.replaceAll('ор', 'ꙍр')

		.replaceAll('Кх', 'Қ')
		.replaceAll('кх', 'қ')

		.replaceAll('Га', 'Ӷа')
		.replaceAll('га', 'ӷа')

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

		.replaceAll('Шх', 'Ԧ')
		.replaceAll('Шх', 'ԧ')

		.replaceAll('Ча', 'Ҷа')
		.replaceAll('ча', 'ҷа')

		.replaceAll('Ҷаю', 'Ҷ̈а')
		.replaceAll('ҷаю', 'ҷ̈а')

		.replaceAll('Ач', 'Ӌ')
		.replaceAll('ач', 'ӌ')

		.replaceAll('Ч̣', 'Чх')
		.replaceAll('ч̣', 'чх')

		.replaceAll('Ҷах', 'Ҷ̣а')
		.replaceAll('ҷах', 'ҷ̣а')

		.replaceAll('Шл', 'Ԡ')
		.replaceAll('шл', 'ԡ')

		.replaceAll('Нт', 'Ԣ')
		.replaceAll('нт', 'ԣ')

		.replaceAll('Пр', 'Ҧ')
		.replaceAll('пр', 'ҧ')

		.replaceAll('Тр', 'Ꚋ')
		.replaceAll('тр', 'ꚋ')

		.replaceAll('Фл', 'Ӆ')
		.replaceAll('фл', 'ӆ')

		.replaceAll('Мр', 'Ӎ')
		.replaceAll('мр', 'ӎ')

		.replaceAll('Нк', 'Ӊ')
		.replaceAll('нк', 'ӊ')

		.replaceAll('Хл', 'Ӽ')
		.replaceAll('хл', 'ӽ')

		.replaceAll('Лц', 'Ԓ')
		.replaceAll('лц', 'ԓ')

		.replaceAll('Еа', 'Ӗ')
		.replaceAll('еа', 'ӗ');
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
		} else if (
			// Check that finall letters a need to replace
			words[i].length >= 2 &&
			Object.keys(finalSoftLetters).includes(
				words[i][words[i].length - 2].concat(words[i][words[i].length - 1])
			)
		) {
			const wordArr = words[i].split('');

			wordArr.pop();
			const l = wordArr.pop();

			wordArr.push(finalSoftLetters[`${l}ь`]);

			words[i] = wordArr.join('');
		} else if (words[i][words[i].length - 1] === 'й') {
			const wordArr = words[i].split('');

			wordArr.pop();
			wordArr.push('ј');
			wordArr.push('ъ');

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
