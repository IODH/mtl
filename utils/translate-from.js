function replaceFrom(str) {
	return str
		.replaceAll(/[Ӓ̄Ӛ̄]/gu, 'Ая')
		.replaceAll(/[ӓ̄ӛ̄]/gu, 'ая')

		.replaceAll(/[Ё̄Ъ̈̄]/gu, 'Еє')
		.replaceAll(/[ё̄ъ̈̄]/gu, 'еє')

		.replaceAll('Ӱ̄', 'Ую')
		.replaceAll('ӱ̄', 'ую')

		.replaceAll('Ӧ̄', 'Ойо')
		.replaceAll('ӧ̄', 'Ойо')

		.replaceAll(/(Ӓъ|Ӓ)/gu, 'Ай')
		.replaceAll(/(ӓъ|ӓ)/gu, 'ай')

		.replaceAll(/(Ӱъ|Ӱ)/gu, 'Уй')
		.replaceAll(/(ӱъ|ӱ)/gu, 'уй')

		.replaceAll(/(Ёъ|Ё|Ӭ)/gu, 'Ей')
		.replaceAll(/(ёъ|ё|ӭ)/gu, 'ей')

		.replaceAll(/(Ӧъ|Ӧ)/gu, 'Ой')
		.replaceAll(/(ӧъ|ӧ)/gu, 'ой')

		.replaceAll(/(Ю̈ъ|Ю̈)/gu, 'Юй')
		.replaceAll(/(ю̈ъ|ю̈)/gu, 'юй')

		.replaceAll(/(Я̈ъ|Я̈)/gu, 'Яй')
		.replaceAll(/(я̈ъ|я̈)/gu, 'яй')

		.replaceAll(/(Є̈ъ|Є̈)/gu, 'Єй')
		.replaceAll(/(є̈ъ|є̈)/gu, 'єй')

		.replaceAll(/(ӥъ|ӥ|ӹ)/gu, 'єй')
		.replaceAll(/(Ӥъ|Ӥ)/gu, 'єй')

		.replaceAll(/(Ҋъ|Ҋ)/gu, 'Ій')
		.replaceAll(/(ҋъ|ҋ)/gu, 'ій')

		.replaceAll('ы̆', 'ив')
		.replaceAll('ы̄', 'ию')

		.replaceAll('јъ', 'й')

		.replaceAll('ҍ', '')
		.replaceAll('ꙏ', '')

		.replaceAll('', 'і')
		.replaceAll('', 'і')

		.replaceAll('Т̓', 'Тх')
		.replaceAll('т̓', 'тх')

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

		.replaceAll('Ѥ', 'Іє')
		.replaceAll('ѥ', 'іє')

		.replaceAll('Ԙ', 'Яє')
		.replaceAll('ԙ', 'яє')

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

		.replaceAll('Ѭ', 'Йо')
		.replaceAll('ѭ', 'йо')

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

		.replaceAll('Ԗ', 'Рх')
		.replaceAll('ԗ', 'рх')

		.replaceAll('Ԕ', 'Лх')
		.replaceAll('ԕ', 'лх')

		.replaceAll('Ӭ̄', 'Єє')
		.replaceAll('ӭ̄', 'єє')

		.replaceAll('Ꙟ', 'Ин')
		.replaceAll('ꙟ', 'ин')

		.replaceAll('Ў', 'Ув')
		.replaceAll('ў', 'ув')

		.replaceAll('Ꚗ', 'Шв')
		.replaceAll('ꚗ', 'шв')

		.replaceAll('Ꚏ', 'Цв')
		.replaceAll('ꚏ', 'цв')

		.replaceAll(/[Ә̄А̄]/gu, 'Аа')
		.replaceAll(/[ә̄а̄]/gu, 'аа')

		.replaceAll(/[Е̄Ъ̄]/gu, 'Ее')
		.replaceAll(/[е̄ъ̄]/gu, 'ее')

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

		.replaceAll(/[ꙪꚚѺꙨꙬѠѪꙌѼ]/gu, 'О')
		.replaceAll(/[ꙫꚛѻꙩꙭѡѫꙍѽ]/gu, 'о')

		.replaceAll(/[ѨӚ]/gu, 'А')
		.replaceAll(/[ѩӛ]/gu, 'а')

		.replaceAll(/[ѦӘ]/gu, 'А')
		.replaceAll(/[ѧә]/gu, 'а')

		.replaceAll(/[ѢꙘЪ]/gu, 'Е')
		.replaceAll(/[ѣꙙъ]/gu, 'е')

		.replaceAll(/[ꙒꙜЪ̈]/gu, 'Є')
		.replaceAll(/[ꙓꙝъ̈]/gu, 'є')

		.replaceAll(/[ꙚꙆѶ]/gu, 'І')
		.replaceAll(/[ꙛꙇѷ]/gu, 'і')

		.replaceAll(/[ѴЫꙐ]/gu, 'И')
		.replaceAll(/[ѵыꙑ]/gu, 'и')

		.replaceAll(/[ꙈԪ]/gu, 'Дж')
		.replaceAll(/[ꙉԫ]/gu, 'дж')

		.replaceAll('Багтꙮ', 'Багато')
		.replaceAll('багтꙮ', 'багато')

		.replaceAll('Мнꙮг', 'Много')
		.replaceAll('мнꙮг', 'много')

		.replaceAll('Ꚙч', 'Очо')
		.replaceAll('ꚙч', 'очо')

		.replaceAll('Ꙕ', 'Оі')
		.replaceAll('ꙕ', 'оі')

		.replaceAll('О̄', 'Оо')
		.replaceAll('о̄', 'оо')

		.replaceAll('Ў', 'Уу')
		.replaceAll('ӯ', 'уу')

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

		.replaceAll('Ҿ', 'Чк')
		.replaceAll('ҿ', 'чк')

		.replaceAll('Ҽ', 'Вч')
		.replaceAll('ҽ', 'вч')

		.replaceAll('Ҽ̆', 'Чв')
		.replaceAll('ҽ̆', 'чв')

		.replaceAll('Ӡ', 'Зб')
		.replaceAll('ӡ', 'зб')

		.replaceAll('О̆', 'Ое')
		.replaceAll('о̆', 'ое')

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

		.replaceAll('Ӄ', 'Кт')
		.replaceAll('ӄ', 'кт')

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

		.replaceAll('Ԝ', 'Вл')
		.replaceAll('ԝ', 'вл')

		.replaceAll('Ӳ', 'уа')
		.replaceAll('ӳ', 'уа')

		.replaceAll('Ӿ', 'Хж')
		.replaceAll('ӿ', 'хж')

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
		.replaceAll(/Ԃ[яє]/gu, (m) => 'Д' + m[1])
		.replaceAll(/ԃ[яє]/gu, (m) => 'д' + m[1])
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
		.replaceAll(/[ԉљ]/, 'ль')

		.replaceAll('Њ', 'Нь')
		.replaceAll(/[ԋњ]/, 'нь')

		.replaceAll('Ᲊ', 'Ть')
		.replaceAll(/[ԏᲊ]/, 'ть')

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
