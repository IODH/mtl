function replaceFrom(str) {
	return str
		.replaceAll('Ӓ̄', 'Ая')
		.replaceAll('ӓ̄', 'ая')

		.replaceAll('Ё̄', 'Еє')
		.replaceAll('ё̄', 'еє')

		.replaceAll('Ӱ̄', 'Ую')
		.replaceAll('ӱ̄', 'ую')

		.replaceAll('Ӧ̄', 'Ойо')
		.replaceAll('ӧ̄', 'Ойо')

		.replaceAll('Ӓъ', 'Ай')
		.replaceAll('ӓъ', 'ай')

		.replaceAll('Ӓ', 'Ай')
		.replaceAll('ӓ', 'ай')

		.replaceAll('Ӱъ', 'Уй')
		.replaceAll('ӱъ', 'уй')

		.replaceAll('Ӱ', 'Уй')
		.replaceAll('ӱ', 'уй')

		.replaceAll('Ёъ', 'Ей')
		.replaceAll('ёъ', 'ей')

		.replaceAll('Ё', 'Ей')
		.replaceAll('ё', 'ей')

		.replaceAll('Ӧъ', 'Ой')
		.replaceAll('ӧъ', 'ой')

		.replaceAll('Ӧ', 'Ой')
		.replaceAll('ӧ', 'ой')

		.replaceAll('Ю̈ъ', 'Юй')
		.replaceAll('ю̈ъ', 'юй')

		.replaceAll('Ю̈', 'Юй')
		.replaceAll('ю̈', 'юй')

		.replaceAll('Я̈ъ', 'Яй')
		.replaceAll('я̈ъ', 'яй')

		.replaceAll('Я̈', 'Яй')
		.replaceAll('я̈', 'яй')

		.replaceAll('Є̈ъ', 'Єй')
		.replaceAll('є̈ъ', 'єй')

		.replaceAll('Є̈', 'Єй')
		.replaceAll('є̈', 'єй')

		.replaceAll('Ӥъ', 'Ий')
		.replaceAll('ӥъ', 'ий')

		.replaceAll('Ӥ', 'Ий')
		.replaceAll('ӥ', 'ий')

		.replaceAll(/[ыӹꙑы̄ы̆]/gu, 'и')
		.replaceAll(/[ЫꙐ]/gu, 'И')

		.replaceAll('јъ', 'й')

		.replaceAll('ҍ', '')
		.replaceAll('ꙏ', '')

		.replaceAll('ѣ', 'е')
		.replaceAll('ꙓ', 'є')
		.replaceAll('ꙇ', 'і')

		.replaceAll('Ꙓ', 'є')
		.replaceAll('Ѣ', 'е')
		.replaceAll('Ꙇ', 'і')

		.replaceAll('Т̓', 'Тх')
		.replaceAll('т̓', 'тх')

		.replaceAll('Ӛ̄', 'Ая')
		.replaceAll('ӛ̄', 'ая')

		.replaceAll('Ӛ', 'Я')
		.replaceAll('ӛ', 'я')

		.replaceAll('Ю̄', 'Юю')
		.replaceAll('ю̄', 'юю')

		.replaceAll('Ю̆', 'Юв')
		.replaceAll('ю̆', 'юв')

		.replaceAll('Я̄', 'Яя')
		.replaceAll('я̄', 'яя')

		.replaceAll('Ӫ', 'Ює')
		.replaceAll('ӫ', 'ює')

		.replaceAll('Ꙗ', 'Іа')
		.replaceAll('ꙗ', 'іа')

		.replaceAll('Ҋъ', 'Ій')
		.replaceAll('ҋъ', 'ій')

		.replaceAll('Ҋ', 'Ій')
		.replaceAll('ҋ', 'ій')

		.replaceAll('Ѥ', 'Іє')
		.replaceAll('ѥ', 'іє')

		.replaceAll('Ѷр', 'Ір')
		.replaceAll('ѷр', 'ір')

		.replaceAll('Ԙ', 'Яє')
		.replaceAll('ԙ', 'яє')

		.replaceAll('Ъ̈̄', 'Еє')
		.replaceAll('ъ̈̄', 'еє')

		.replaceAll('Ъ̄', 'Ее')
		.replaceAll('ъ̄', 'ее')

		.replaceAll('Ъ̈', 'Є')
		.replaceAll('ъ̈', 'є')

		.replaceAll('Ъ', 'Е')
		.replaceAll('ъ', 'е')

		.replaceAll('Ԑ̈', 'Зню')
		.replaceAll('ԑ̈', 'зню')

		.replaceAll(/(Д̈|Ӝ|Ӟ|К̈|Т̈|Ӵ)/gu, (m) => m[0] + 'ю')
		.replaceAll(/(д̈|ӝ|ӟ|к̈|т̈|ӵ)/gu, (m) => m[0] + 'ю')

		.replaceAll(/[к̄д̄т̄з̄с̄л̄н̄ж̄ш̄р̄в̄]/gu, (m) => m[0] + m[0])
		.replaceAll(/[Д̄Т̄З̄С̄Л̄Н̄К̄Ж̄Ш̄Р̄В̄]/gu, (m) => m[0] + m[0].toLowerCase())

		.replaceAll(/В̌|Г̌|Д̌|Р̌|С̌|Т̌|Х̌/gu, (m) => 'З' + m[0])
		.replaceAll(/в̌|г̌|д̌|р̌|с̌|т̌|х̌/gu, (m) => 'з' + m[0])

		.replaceAll('Ӕ', 'Ае')
		.replaceAll('ӕ', 'ае')

		.replaceAll('Ꙉ', 'Дж')
		.replaceAll('ꙉ', 'дж')

		.replaceAll('Ԫ', 'Дж')
		.replaceAll('ԫ', 'дж')

		.replaceAll('Ђ', 'Д')
		.replaceAll('ђ', 'д')

		.replaceAll('Ꙃ', 'Дзе')
		.replaceAll('ꙃ', 'дзе')

		.replaceAll('Ԇӏ', 'Дзьо')
		.replaceAll('ԇӏ', 'дзьо')

		.replaceAll('Ԇ', 'Дзь')
		.replaceAll('ԇ', 'дзь')

		.replaceAll('ꚃ', 'Дзв')
		.replaceAll('ꚃ', 'дзв')

		.replaceAll('Ꚉ', 'Дз')
		.replaceAll('ꚉ', 'дз')

		.replaceAll('І̵Ꙋ', 'Йоу')
		.replaceAll('І̵ꙋ', 'йоу')

		.replaceAll('Ꙋ', 'Оу')
		.replaceAll('ꙋ', 'оу')

		.replaceAll('Ꚗ̆', 'Вш')
		.replaceAll('ꚗ̆', 'вш')

		.replaceAll('Ꚏ̆', 'Вц')
		.replaceAll('ꚏ̆', 'вц')

		.replaceAll('Џ̆', 'Цз')
		.replaceAll('џ̆', 'цз')

		.replaceAll('Ꚍ̆', 'Вт')
		.replaceAll('ꚍ̆', 'вт')

		.replaceAll('Ѿ', 'От')
		.replaceAll('ѿ', 'от')

		.replaceAll('Ѯ', 'Кс')
		.replaceAll('ѯ', 'кс')

		.replaceAll('Ѱ', 'Пс')
		.replaceAll('ѱ', 'пс')

		.replaceAll('Ѳ', 'Фт')
		.replaceAll('ѳ', 'фт')

		.replaceAll('Ҩ', 'Іо')
		.replaceAll('ҩ', 'іо')

		.replaceAll('Ѧ', 'А')
		.replaceAll('ѧ', 'а')

		.replaceAll('Ѩ', 'Я')
		.replaceAll('ѩ', 'я')

		.replaceAll('Ѭ', 'Йо')
		.replaceAll('ѭ', 'йо')

		.replaceAll('Ѫ', 'О')
		.replaceAll('ѫ', 'о')

		.replaceAll('Ꙙ', 'Е')
		.replaceAll('ꙙ', 'е')

		.replaceAll('Ꙝ', 'Є')
		.replaceAll('ꙝ', 'є')

		.replaceAll('Ꙛ', 'І')
		.replaceAll('ꙛ', 'і')

		.replaceAll('Ѕ', 'Ст')
		.replaceAll('ѕ', 'ст')

		.replaceAll('Ҥ', 'Нг')
		.replaceAll('ҥ', 'нг')

		.replaceAll('Ꙣ', 'Дг')
		.replaceAll('ꙣ', 'дг')

		.replaceAll('Ꙥ', 'Лг')
		.replaceAll('ꙥ', 'лг')

		.replaceAll('Ꙧ', 'Мг')
		.replaceAll('ꙧ', 'мг')

		.replaceAll('Ҥ̂', 'Нґ')
		.replaceAll('ҥ̂', 'нґ')

		.replaceAll('Ꚇ', 'Чч')
		.replaceAll('ꚇ', 'чч')

		.replaceAll('Ѡ', 'О')
		.replaceAll('ѡ', 'о')

		.replaceAll('Ԗ', 'Рх')
		.replaceAll('ԗ', 'рх')

		.replaceAll('Ԕ', 'Лх')
		.replaceAll('ԕ', 'лх')

		.replaceAll('Ӭ̄', 'Єє')
		.replaceAll('ӭ̄', 'єє')

		.replaceAll('Ы', 'И')
		.replaceAll('ы', 'и')

		.replaceAll('Ꙟ', 'Ин')
		.replaceAll('ꙟ', 'ин')

		.replaceAll('Ә', 'А')
		.replaceAll('ә', 'а')

		.replaceAll('Ў', 'Ув')
		.replaceAll('ў', 'ув')

		.replaceAll('Ꚗ', 'Шв')
		.replaceAll('ꚗ', 'шв')

		.replaceAll('Ꚏ', 'Цв')
		.replaceAll('ꚏ', 'цв')

		.replaceAll('Ә̄', 'Аа')
		.replaceAll('ә̄', 'Аа')

		.replaceAll('Џ', 'Зц')
		.replaceAll('џ', 'зц')

		.replaceAll('Ҏ', 'Рт')
		.replaceAll('ҏ', 'рт')

		.replaceAll('Ӗ', 'Еа')
		.replaceAll('ӗ', 'еа')

		.replaceAll('Ҹ', 'Чж')
		.replaceAll('ҹ', 'чж')

		.replaceAll('Ћ', 'Ч')
		.replaceAll('ћ', 'ч')

		.replaceAll('Ө', 'Оє')
		.replaceAll('ө', 'оє')

		.replaceAll('Ꚕ', 'Хв')
		.replaceAll('ꚕ', 'хв')

		.replaceAll('Һ', 'Хр')
		.replaceAll('һ', 'хр')

		.replaceAll('Ԛ', 'Км')
		.replaceAll('ԛ', 'км')

		.replaceAll('Ԭ', 'Дч')
		.replaceAll('ԭ', 'дч')

		.replaceAll('Ҵ̈', 'Тцю')
		.replaceAll('ҵ̈', 'тцю')

		.replaceAll('Ҵ', 'Тц')
		.replaceAll('ҵ', 'тц')

		.replaceAll('Ҁ', 'Коп')
		.replaceAll('ҁ', 'коп')

		.replaceAll('Ꙁ', 'Зм')
		.replaceAll('ꙁ', 'зм')

		.replaceAll('Ꚓ', 'Тч')
		.replaceAll('ꚓ', 'тч')

		.replaceAll('Ꚍ', 'Тв')
		.replaceAll('ꚍ', 'тв')

		.replaceAll('Ꚁ', 'Дв')
		.replaceAll('ꚁ', 'дв')

		.replaceAll('Ꚑ', 'Тс')
		.replaceAll('ꚑ', 'тс')

		.replaceAll('Ѵ', 'И')
		.replaceAll('ѵ', 'и')

		.replaceAll('ꙫ', 'о')
		.replaceAll('ꙫ', 'о')

		.replaceAll('Ꙫ', 'О')
		.replaceAll('ꙫ', 'о')

		.replaceAll('Ꚛ', 'О')
		.replaceAll('ꚛ', 'о')

		.replaceAll('Багтꙮ', 'Багато')
		.replaceAll('багтꙮ', 'багато')

		.replaceAll('Мнꙮг', 'Много')
		.replaceAll('мнꙮг', 'много')

		.replaceAll('Ѻ', 'О')
		.replaceAll('ѻ', 'о')

		.replaceAll('Ꙩ', 'О')
		.replaceAll('ꙩ', 'о')

		.replaceAll('Ꙭ', 'о')
		.replaceAll('ꙭ', 'о')

		.replaceAll('Ꚙч', 'Очо')
		.replaceAll('ꚙч', 'очо')

		.replaceAll('Ꙕ', 'Оі')
		.replaceAll('ꙕ', 'оі')

		.replaceAll('А̄', 'Аа')
		.replaceAll('а̄', 'аа')

		.replaceAll('О̄', 'Оо')
		.replaceAll('о̄', 'оо')

		.replaceAll('Ў', 'Уу')
		.replaceAll('ӯ', 'уу')

		.replaceAll('Е̄', 'Ее')
		.replaceAll('е̄', 'ее')

		.replaceAll('Ӣ', 'Ии')
		.replaceAll('ӣ', 'ии')

		.replaceAll('Ї̄', 'Її')
		.replaceAll('ї̄', 'її')

		.replaceAll('Ī', 'Іі')
		.replaceAll('ī', 'іі')

		.replaceAll('Ꚅ̆', 'Зжв')
		.replaceAll('ꚅ̆', 'зжв')

		.replaceAll('Ꚅ', 'Зж')
		.replaceAll('ꚅ', 'зж')

		.replaceAll('Ј', 'Й')
		.replaceAll('ј', 'й')

		.replaceAll('Э̆л', 'Елв')
		.replaceAll('э̆л', 'елв')

		.replaceAll('Эл', 'Ел')
		.replaceAll('эл', 'ел')

		.replaceAll('Ц̈', 'Цю')
		.replaceAll('ц̈', 'цю')

		.replaceAll('Ӭ', 'Ей')
		.replaceAll('ӭ', 'ей')

		.replaceAll('Ҽ', 'Чк')
		.replaceAll('ҽ', 'чк')

		.replaceAll('Ҿ', 'Че')
		.replaceAll('ҿ', 'че')

		.replaceAll('Ӡ', 'Зб')
		.replaceAll('ӡ', 'зб')

		.replaceAll('О̆', 'Ов')
		.replaceAll('о̆', 'ов')

		.replaceAll('А̊', 'Ао')
		.replaceAll('а̊', 'ао')

		.replaceAll('У̊', 'Уо')
		.replaceAll('у̊', 'уо')

		.replaceAll('Ӻ', 'Гр')
		.replaceAll('ӻ', 'гр')

		.replaceAll('Ғ̌', 'Гл')
		.replaceAll('ғ̌', 'гл')

		.replaceAll('Ғ', 'Гн')
		.replaceAll('ғ', 'гн')

		.replaceAll('Ҕ', 'Гв')
		.replaceAll('ҕ', 'гв')

		.replaceAll('Ԟ', 'Кр')
		.replaceAll('ԟ', 'кр')

		.replaceAll('Ҡ', 'Кн')
		.replaceAll('ҡ', 'кн')

		.replaceAll('К̆', 'Кв')
		.replaceAll('к̆', 'кв')

		.replaceAll('К̑', 'Вк')
		.replaceAll('к̑', 'вк')

		.replaceAll('Ҟ', 'Кл')
		.replaceAll('ҟ', 'кл')

		.replaceAll('Ӄ', 'Кб')
		.replaceAll('Ӄ', 'Кб')

		.replaceAll('Ү', 'Уе')
		.replaceAll('ү', 'уе')

		.replaceAll('Ұ', 'Ує')
		.replaceAll('ұ', 'ує')

		.replaceAll('Ԑ', 'Зн')
		.replaceAll('ԑ', 'зн')

		.replaceAll('Ӈ', 'Нч')
		.replaceAll('ӈ', 'нч')

		.replaceAll('Ԩ', 'Чн')
		.replaceAll('ԩ', 'чн')

		.replaceAll('ӹ', 'ию')

		.replaceAll('Ԝ', 'Вл')
		.replaceAll('ԝ', 'вл')

		.replaceAll('Ӳ', 'уа')
		.replaceAll('ӳ', 'уа')

		.replaceAll('Ӿ', 'Хж')
		.replaceAll('ӿ', 'хж')

		.replaceAll('Ꙍ', 'О')
		.replaceAll('ꙍ', 'о')

		.replaceAll('Ѽ', 'о')
		.replaceAll('ѽ', 'о')

		.replaceAll('Љӏ', 'Льо')
		.replaceAll('љӏ', 'льо')

		.replaceAll('Њӏ', 'Ньо')
		.replaceAll('њӏ', 'ньо')

		.replaceAll('Ᲊӏ', 'Тьо')
		.replaceAll('ᲊӏ', 'тьо')

		.replaceAll('Ԁӏ', 'Дьо')
		.replaceAll('ԁӏ', 'дьо')

		.replaceAll('Ꙡ', 'Ц')
		.replaceAll('ꙡ', 'ц')

		.replaceAll('ӏ', 'ьо')

		.replaceAll('Ԁ', 'Дн')
		.replaceAll('ԁ', 'дн')

		.replaceAll('Θ', 'Тет')
		.replaceAll('ϑ', 'тет')

		.replaceAll('Қ', 'Кх')
		.replaceAll('қ', 'кх')

		.replaceAll('Җ', 'Жр')
		.replaceAll('җ', 'жр')

		.replaceAll('Ҙ', 'Зл')
		.replaceAll('ҙ', 'зл')

		.replaceAll('Ԯ', 'Сл')
		.replaceAll('ԯ', 'сл')

		.replaceAll('Ң', 'Нз')
		.replaceAll('ң', 'нз')

		.replaceAll('Ԥ', 'Пл')
		.replaceAll('ԥ', 'пл')

		.replaceAll('Ҫ', 'Св')
		.replaceAll('ҫ', 'св')

		.replaceAll('Ҭ', 'Тк')
		.replaceAll('ҭ', 'тк')

		.replaceAll('Ҳ', 'Хт')
		.replaceAll('ҳ', 'хт')

		.replaceAll('Ԧ', 'Шх')
		.replaceAll('ԧ', 'шх')

		.replaceAll('Ҷ̈а', 'чаю')
		.replaceAll('ҷ̈а', 'чаю')

		.replaceAll('Ч̣', 'Чх')
		.replaceAll('ч̣', 'чх')

		.replaceAll('Ҷ̣а', 'Чах')
		.replaceAll('ҷ̣а', 'чах')

		.replaceAll('Ҷ', 'Ч')
		.replaceAll('ҷ', 'ч')

		.replaceAll('Ӷ', 'Вг')
		.replaceAll('ӷ', 'вг')

		.replaceAll('Ӌ', 'Ач')
		.replaceAll('ӌ', 'ач')

		.replaceAll('Δ', 'Др')
		.replaceAll('δ', 'др')

		.replaceAll('Ԡ', 'Шл')
		.replaceAll('ԡ', 'шл')

		.replaceAll('Ԣ', 'Нт')
		.replaceAll('ԣ', 'нт')

		.replaceAll('Ҧ', 'Пр')
		.replaceAll('ҧ', 'пр')

		.replaceAll('Ꚋ', 'Тр')
		.replaceAll('ꚋ', 'тр')

		.replaceAll('Ӆ', 'Фл')
		.replaceAll('ӆ', 'фл')

		.replaceAll('Ӎ', 'Мр')
		.replaceAll('ӎ', 'мр')

		.replaceAll('Ӊ', 'Нк')
		.replaceAll('ӊ', 'нк')

		.replaceAll('Ӽ', 'Хл')
		.replaceAll('ӽ', 'хл')

		.replaceAll('Ԓ', 'Лц')
		.replaceAll('ԓ', 'лц')

		.replaceAll(/[сзцСЗЦрРДд]ь[яюєі]/gu, (m) => m[0] + m[2])

		.replaceAll(/Ԏ[яюєі]/gu, (m) => 'Т' + m[1])
		.replaceAll(/ԏ[яюєі]/gu, (m) => 'т' + m[1])
		.replaceAll(/Ԍ[яюєі]/gu, (m) => 'С' + m[1])
		.replaceAll(/ԍ[яюєі]/gu, (m) => 'с' + m[1])
		.replaceAll(/Ԃ[яюєі]/gu, (m) => 'Д' + m[1])
		.replaceAll(/ԃ[яюєі]/gu, (m) => 'д' + m[1])
		.replaceAll(/Ԉ[яюєі]/gu, (m) => 'Л' + m[1])
		.replaceAll(/ԉ[яюєі]/gu, (m) => 'л' + m[1])
		.replaceAll(/Ԋ[яюєі]/gu, (m) => 'Н' + m[1])
		.replaceAll(/ԋ[яюєі]/gu, (m) => 'н' + m[1])
		.replaceAll(/Ԅ[яюєі]/gu, (m) => 'З' + m[1])
		.replaceAll(/ԅ[яюєі]/gu, (m) => 'з' + m[1])

		.replaceAll(/Ԃˮ[яюєі]/gu, (m) => 'Д' + m[1])
		.replaceAll(/ԃˮ[яюєі]/gu, (m) => 'д' + m[1])
		.replaceAll(/Ԏˮ[яюєі]/gu, (m) => 'Ть' + m[2])
		.replaceAll(/ԏˮ[яюєі]/gu, (m) => 'ть' + m[2])
		.replaceAll(/Ԍˮ[яюєі]/gu, (m) => 'Сь' + m[2])
		.replaceAll(/ԍˮ[яюєі]/gu, (m) => 'сь' + m[2])
		.replaceAll(/Ԃˮ[яюєі]/gu, (m) => 'Дь' + m[2])
		.replaceAll(/ԃˮ[яюєі]/gu, (m) => 'дь' + m[2])
		.replaceAll(/Ԉˮ[яюєі]/gu, (m) => 'Ль' + m[2])
		.replaceAll(/ԉˮ[яюєі]/gu, (m) => 'ль' + m[2])
		.replaceAll(/Ԋˮ[яюєі]/gu, (m) => 'Нь' + m[2])
		.replaceAll(/ԋˮ[яюєі]/gu, (m) => 'нь' + m[2])
		.replaceAll(/Ԅˮ[яюєі]/gu, (m) => 'Зь' + m[2])
		.replaceAll(/ԅˮ[яюєі]/gu, (m) => 'зь' + m[2])
		.replaceAll(/Ԃˮ[яюєі]/gu, (m) => 'Дь' + m[2])
		.replaceAll(/ԃˮ[яюєі]/gu, (m) => 'дь' + m[2])

		.replaceAll('ˮ', '')

		.replaceAll('Љ', 'Ль')
		.replaceAll('љ', 'ль')
		.replaceAll('ԉ', 'ль')

		.replaceAll('Њ', 'Нь')
		.replaceAll('њ', 'нь')
		.replaceAll('ԋ', 'нь')

		.replaceAll('Ᲊ', 'Ть')
		.replaceAll('ᲊ', 'ть')
		.replaceAll('ԏ', 'ть')

		.replaceAll('Ԍ', 'Сь')
		.replaceAll('ԍ', 'сь')

		.replaceAll('Ԅ', 'Зь')
		.replaceAll('ԅ', 'зь')

		.replaceAll('Ԃ', 'Дь')
		.replaceAll('ԃ', 'дь')

		.replaceAll('წ', 'ць')
		.replaceAll('ჭ', 'чь');
}

export function translateFrom(str) {
	return replaceFrom(str);
}
