function replaceFrom(str) {
	return str
		.replaceAll(/(Ӓ̄|Ӛ̄)/gu, 'Ая')
		.replaceAll(/(ӓ̄|ӛ̄)/gu, 'ая')

		.replaceAll(/(Ё̄|Ъ̈̄)/gu, 'Еє')
		.replaceAll(/(ё̄|ъ̈̄)/gu, 'еє')

		.replaceAll('̄', 'Цц')
		.replaceAll('̄', 'цц')

		.replaceAll('Ԍ̄', 'Сс')
		.replaceAll('ԍ̄', 'сс')

		.replaceAll('Ԅ̄', 'Зз')
		.replaceAll('ԅ̄', 'зз')

		.replaceAll(/(̄|Ԉ̄)/gu, 'Лл')
		.replaceAll(/(̄|ԉ̄)/gu, 'лл')

		.replaceAll(/(Ђ̄|Ԃ̄)/gu, 'Дд')
		.replaceAll(/(ђ̄|ԃ̄)/gu, 'дд')

		.replaceAll('Ԏ̄', 'Тт')
		.replaceAll('ԏ̄', 'тт')

		.replaceAll('Ԋ̄', 'Нн')
		.replaceAll('ԋ̄', 'нн')

		.replaceAll('Ӱ̄', 'Ую')
		.replaceAll('ӱ̄', 'ую')

		.replaceAll('Ӧ̄', 'Ойо')
		.replaceAll('ӧ̄', 'Ойо')

		.replaceAll(/(Ё|Ӭ|Ѣ̈)/gu, 'Ей')
		.replaceAll(/(ё|ӭ|ѣ̈)/gu, 'ей')

		.replaceAll(/(Ӓ|Ӛ)/gu, 'Ай')
		.replaceAll(/(ӓ|ӛ)/gu, 'ай')

		.replaceAll('Ӱ', 'Уй')
		.replaceAll('ӱ', 'уй')

		.replaceAll('Ӧ', 'Ой')
		.replaceAll('ӧ', 'ой')

		.replaceAll('Ю̈', 'Юй')
		.replaceAll('ю̈', 'юй')

		.replaceAll('Я̈', 'Яй')
		.replaceAll('я̈', 'яй')

		.replaceAll('Є̈', 'Єй')
		.replaceAll('є̈', 'єй')

		.replaceAll(/(Ӥ|Ӹ)/gu, 'Ий')
		.replaceAll(/(ӥ|ӹ)/gu, 'ий')

		.replaceAll('Ы̆', 'Иє')
		.replaceAll('ы̆', 'иє')

		.replaceAll('Ы̄', 'Ию')
		.replaceAll('ы̄', 'ию')

		.replaceAll(/[ᵸҍꙏ]/gu, '')

		.replaceAll('Т̓', 'Тх')
		.replaceAll('т̓', 'тх')

		.replaceAll('Ю̄', 'Юю')
		.replaceAll('ю̄', 'юю')

		.replaceAll('Ю̆', 'Юї')
		.replaceAll('ю̆', 'юї')

		.replaceAll('Я̄', 'Яя')
		.replaceAll('я̄', 'яя')

		.replaceAll('Ө̆', 'Оєв')
		.replaceAll('ө̆', 'оєв')

		.replaceAll('Ӫ', 'Ює')
		.replaceAll('ӫ', 'ює')

		.replaceAll('Ө̄', 'Юе')
		.replaceAll('ө̄', 'юе')

		.replaceAll('Ꙗ', 'Іа')
		.replaceAll('ꙗ', 'іа')

		.replaceAll('Ӑ', 'Ає')
		.replaceAll('ӑ', 'ає')

		.replaceAll('', 'Ау')
		.replaceAll('', 'ау')

		.replaceAll('', 'Їн')
		.replaceAll('', 'їн')

		.replaceAll('Ѥ', 'Іє')
		.replaceAll('ѥ', 'іє')

		.replaceAll('Ԙ', 'Яє')
		.replaceAll('ԙ', 'яє')

		.replaceAll('Ԑ̈', 'Зню')
		.replaceAll('ԑ̈', 'зню')

		.replaceAll('т̈', 'Тн')
		.replaceAll('Т̈', 'тн')

		.replaceAll('Ӵ', 'Чн')
		.replaceAll('ӵ', 'чн')

		.replaceAll(/(Д̈|Ӝ|Ӟ|К̈)/gu, (m) => m[0] + 'ю')
		.replaceAll(/(д̈|ӝ|ӟ|к̈)/gu, (m) => m[0] + 'ю')

		.replaceAll(/(к̄|д̄|т̄|з̄|с̄|л̄|н̄|ж̄|ш̄|р̄|в̄)/gu, (m) => m[0] + m[0])
		.replaceAll(/(Д̄|Т̄|З̄|С̄|Л̄|Н̄|К̄|Ж̄|Ш̄|Р̄|В̄)/gu, (m) => m[0] + m[0].toLowerCase())

		.replaceAll(/(В̌|Г̌|Д̌|Р̌|С̌|Т̌|Х̌)/gu, (m) => 'З' + m[0].toLowerCase())
		.replaceAll(/(в̌|г̌|д̌|р̌|с̌|т̌|х̌)/gu, (m) => 'з' + m[0])

		.replaceAll('Ӕ', 'Ае')
		.replaceAll('ӕ', 'ае')

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

		.replaceAll('', 'Іу')
		.replaceAll('', 'іу')

		.replaceAll('', 'Йов')
		.replaceAll('', 'йов')

		.replaceAll('', 'Йоу')
		.replaceAll('', 'йоу')

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

		.replaceAll('Ҩ', 'Хп')
		.replaceAll('ҩ', 'хп')

		.replaceAll('Ѭ', 'Йо')
		.replaceAll('ѭ', 'йо')

		.replaceAll('', 'Лп')
		.replaceAll('', 'лп')

		.replaceAll('', 'Лр')
		.replaceAll('', 'лр')

		.replaceAll(/[]/gu, 'Тл')
		.replaceAll(/[]/gu, 'тл')

		.replaceAll('', 'Тль')
		.replaceAll('', 'тль')

		.replaceAll('', 'Лт')
		.replaceAll('', 'лт')

		.replaceAll('Ѕ', 'Стр')
		.replaceAll('ѕ', 'стр')

		.replaceAll('', 'Ст')
		.replaceAll('', 'ст')

		.replaceAll('Ꙅ', 'Ст')
		.replaceAll('Ꙅ', 'ст')

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

		.replaceAll('Ꙟ', 'И')
		.replaceAll('ꙟ', 'и')

		.replaceAll('Ў', 'Ув')
		.replaceAll('ў', 'ув')

		.replaceAll('Ꚗ', 'Шв')
		.replaceAll('ꚗ', 'шв')

		.replaceAll('Ꚏ', 'Цв')
		.replaceAll('ꚏ', 'цв')

		.replaceAll(/(Ә̄|А̄)/gu, 'Аа')
		.replaceAll(/(ә̄|а̄)/gu, 'аа')

		.replaceAll(/(Е̄|Ъ̄)/gu, 'Ее')
		.replaceAll(/(е̄|ъ̄)/gu, 'ее')

		.replaceAll('Џ', 'Зц')
		.replaceAll('џ', 'зц')

		.replaceAll('Ҏ', 'Рт')
		.replaceAll('ҏ', 'рт')

		.replaceAll('', 'Дх')
		.replaceAll('', 'дх')

		.replaceAll('', 'Оа')
		.replaceAll('', 'оа')

		.replaceAll('', 'Ої')
		.replaceAll('', 'ої')

		.replaceAll('', 'Уї')
		.replaceAll('', 'уї')

		.replaceAll('', 'Сх')
		.replaceAll('', 'сх')

		.replaceAll('', 'Сл')
		.replaceAll('', 'сл')

		.replaceAll('', 'Іе')
		.replaceAll('', 'іе')

		.replaceAll('', 'Гл')
		.replaceAll('', 'гл')

		.replaceAll('', 'Зна')
		.replaceAll('', 'зна')

		.replaceAll('', 'Еа')
		.replaceAll('', 'еа')

		.replaceAll('Ӗ', 'Еу')
		.replaceAll('ӗ', 'еу')

		.replaceAll('Ҹ', 'Чж')
		.replaceAll('ҹ', 'чж')

		.replaceAll(/[Ћ]/gu, 'Ч')
		.replaceAll(/[ћ]/gu, 'ч')

		.replaceAll('Ө', 'Ое')
		.replaceAll('ө', 'ое')

		.replaceAll('Ꚕ', 'Хв')
		.replaceAll('ꚕ', 'хв')

		.replaceAll('Һ', 'Хр')
		.replaceAll('һ', 'хр')

		.replaceAll('', 'Хн')
		.replaceAll('', 'хн')

		.replaceAll('', 'Хс')
		.replaceAll('', 'хс')

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

		.replaceAll(/[Ꚁ]/gu, 'Дв')
		.replaceAll(/[ꚁ]/gu, 'дв')

		.replaceAll('Ꚑ', 'Тс')
		.replaceAll('ꚑ', 'тс')

		.replaceAll(/[ꙪꚚѺꙨꙬѠѪꙌѼ]/gu, 'О')
		.replaceAll(/[ꙫꚛѻꙩꙭѡѫꙍѽ]/gu, 'о')

		.replaceAll(/(Ѩ|Ә̃)/gu, 'Я')
		.replaceAll(/(ѩ|Ә̃)/gu, 'я')

		.replaceAll(/[ѦӘ]/gu, 'А')
		.replaceAll(/[ѧә]/gu, 'а')

		.replaceAll(/[ѢꙘЪ]/gu, 'Е')
		.replaceAll(/[ѣꙙъ]/gu, 'е')

		.replaceAll(/(Ꙓ|Ꙝ|Ъ̈)/gu, 'Є')
		.replaceAll(/(ꙓ|ꙝ|ъ̈)/gu, 'є')

		.replaceAll(/[ꙚѶ]/gu, 'І')
		.replaceAll(/[ꙛѷ]/gu, 'і')

		.replaceAll(/[ЫꙐѴ]/gu, 'И')
		.replaceAll(/[ыꙑѵ]/gu, 'и')

		.replaceAll(/[ꙈԪ]/gu, 'Дж')
		.replaceAll(/[ꙉԫ]/gu, 'дж')

		.replaceAll('Ꙇ', 'Ій')
		.replaceAll('ꙇ', 'ій')

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

		.replaceAll(/[ЈҊ]/, 'Й')
		.replaceAll(/[јҋ]/, 'й')

		.replaceAll('Э̆л', 'Елв')
		.replaceAll('э̆л', 'елв')

		.replaceAll('Эл', 'Ел')
		.replaceAll('эл', 'ел')

		.replaceAll('Ц̈', 'Цм')
		.replaceAll('ц̈', 'цм')

		.replaceAll('Ҿ', 'Чк')
		.replaceAll('ҿ', 'чк')

		.replaceAll('Ҽ', 'Вч')
		.replaceAll('ҽ', 'вч')

		.replaceAll('Ҽ̆', 'Чв')
		.replaceAll('ҽ̆', 'чв')

		.replaceAll('Ӡ', 'Зб')
		.replaceAll('ӡ', 'зб')

		.replaceAll('О̆', 'Оя')
		.replaceAll('о̆', 'оя')

		.replaceAll('А̊', 'Ао')
		.replaceAll('а̊', 'ао')

		.replaceAll('У̊', 'Уо')
		.replaceAll('у̊', 'уо')

		.replaceAll('Ӻ', 'Гн')
		.replaceAll('ӻ', 'гн')

		.replaceAll('Ғ̌', 'Згр')
		.replaceAll('ғ̌', 'згр')

		.replaceAll('Ғ', 'Гр')
		.replaceAll('ғ', 'гр')

		.replaceAll('Ҕ', 'Гв')
		.replaceAll('ҕ', 'гв')

		.replaceAll('Ԟ', 'Кр')
		.replaceAll('ԟ', 'кр')

		.replaceAll('Ҡ', 'Кн')
		.replaceAll('ҡ', 'кн')

		.replaceAll('', 'Кв')
		.replaceAll('', 'кв')

		.replaceAll('К̆', 'Кц')
		.replaceAll('к̆', 'кц')

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

		.replaceAll('Ԩ', 'Нс')
		.replaceAll('ԩ', 'нс')

		.replaceAll('Ԝ', 'Вл')
		.replaceAll('ԝ', 'вл')

		.replaceAll('Ӳ', 'уа')
		.replaceAll('ӳ', 'уа')

		.replaceAll('Ӿ', 'Хж')
		.replaceAll('ӿ', 'хж')

		.replaceAll('Љ̄', 'Лль')
		.replaceAll('љ̄', 'лль')

		.replaceAll('Њ̄', 'Ннь')
		.replaceAll('њ̄', 'ннь')

		.replaceAll('Ᲊ̄', 'Тть')
		.replaceAll('Ᲊ̄', 'тть')

		.replaceAll('̄', 'Ддь')
		.replaceAll('̄', 'ддь')

		.replaceAll('̄', 'Цць')
		.replaceAll('̄', 'цць')

		.replaceAll('Љӏ', 'Льо')
		.replaceAll('љӏ', 'льо')

		.replaceAll('Њӏ', 'Ньо')
		.replaceAll('њӏ', 'ньо')

		.replaceAll('Ᲊӏ', 'Тьо')
		.replaceAll('ᲊӏ', 'тьо')

		.replaceAll('ӏ', 'Дьо')
		.replaceAll('ӏ', 'дьо')

		.replaceAll('Ꙡ', 'Цн')
		.replaceAll('ꙡ', 'цн')

		.replaceAll('', 'Цх')
		.replaceAll('', 'цх')

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

		.replaceAll('Ң', 'Нк')
		.replaceAll('ң', 'нк')

		.replaceAll('Ԥ', 'Пл')
		.replaceAll('ԥ', 'пл')

		.replaceAll('Ҫ', 'Св')
		.replaceAll('ҫ', 'св')

		.replaceAll('Ҭ', 'Тк')
		.replaceAll('ҭ', 'тк')

		.replaceAll('Ҳ', 'Хт')
		.replaceAll('ҳ', 'хт')

		.replaceAll('Ԧ', 'Хш')
		.replaceAll('ԧ', 'хш')

		.replaceAll('', 'Хм')
		.replaceAll('', 'хм')

		.replaceAll('Ҷ̈', 'чт')
		.replaceAll('ҷ̈', 'чт')

		.replaceAll('Ч̣', 'Чх')
		.replaceAll('ч̣', 'чх')

		.replaceAll('Ҷ̣а', 'Чах')
		.replaceAll('ҷ̣а', 'чах')

		.replaceAll('Ҷ', 'Чм')
		.replaceAll('ҷ', 'чм')

		.replaceAll('Ӷ', 'Гд')
		.replaceAll('ӷ', 'гд')

		.replaceAll('Ӌ', 'Чл')
		.replaceAll('ӌ', 'чл')

		.replaceAll('Δ', 'Др')
		.replaceAll('δ', 'др')

		.replaceAll('Ԡ', 'Лч')
		.replaceAll('ԡ', 'лч')

		.replaceAll('Ԣ', 'Нт')
		.replaceAll('ԣ', 'нт')

		.replaceAll('Ҧ', 'Пр')
		.replaceAll('ҧ', 'пр')

		.replaceAll('Ꚋ', 'Тр')
		.replaceAll('ꚋ', 'тр')

		.replaceAll('Ӆ', 'Лф')
		.replaceAll('ӆ', 'лф')

		.replaceAll('Ӎ', 'Мр')
		.replaceAll('ӎ', 'мр')

		.replaceAll('Ӊ', 'Нд')
		.replaceAll('ӊ', 'нд')

		.replaceAll('Ӽ', 'Хл')
		.replaceAll('ӽ', 'хл')

		.replaceAll('Ԓ', 'Лк')
		.replaceAll('ԓ', 'лк')

		.replaceAll('', 'Гх')
		.replaceAll('', 'гх')

		.replaceAll('Ꞵ', 'Бл')
		.replaceAll('ꞵ', 'бл')

		.replaceAll('', 'Іо')
		.replaceAll('', 'іо')

		.replaceAll(/[сзСЗрРДд]ь[яюєі]/gu, (m) => m[0] + m[2])

		.replaceAll(/[Ԉ]/gu, 'Л')
		.replaceAll(/[ԉ]/gu, 'л')

		.replaceAll(/[ԂЂ]/gu, 'Д')
		.replaceAll(/[ԃђ]/gu, 'д')

		.replaceAll('Ԏ', 'Т')
		.replaceAll('ԏ', 'т')

		.replaceAll('Ԍ', 'С')
		.replaceAll('ԍ', 'с')

		.replaceAll('Ԋ', 'Н')
		.replaceAll('ԋ', 'н')

		.replaceAll('Ԅ', 'З')
		.replaceAll('ԅ', 'з')

		.replaceAll('', 'Ц')
		.replaceAll('', 'ц')

		.replaceAll('ˮ', '')

		.replaceAll('', 'Ць')
		.replaceAll('', 'ць')

		.replaceAll('Љ', 'Ль')
		.replaceAll('љ', 'ль')

		.replaceAll('Њ', 'Нь')
		.replaceAll('њ', 'нь')

		.replaceAll('', 'Дь')
		.replaceAll('', 'дь')

		.replaceAll('Ᲊ', 'Ть')
		.replaceAll('ᲊ', 'ть');
}

export function translateFrom(str) {
	return replaceFrom(str);
}
