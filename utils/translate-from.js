function replaceFrom(str) {
	let res = str;
	res = res.replaceAll(/[Ӓ̄Ӛ̄]/gu, 'Ая');
	res = res.replaceAll(/[ӓ̄ӛ̄]/gu, 'ая');

	res = res.replaceAll(/[Ё̄Ъ̈̄]/gu, 'Еє');
	res = res.replaceAll(/[ё̄ъ̈̄]/gu, 'еє');

	res = res.replaceAll('Ӱ̄', 'Ую');
	res = res.replaceAll('ӱ̄', 'ую');

	res = res.replaceAll('Ӧ̄', 'Ойо');
	res = res.replaceAll('ӧ̄', 'Ойо');

	res = res.replaceAll(/(Ӓъ|Ӓ)/gu, 'Ай');
	res = res.replaceAll(/(ӓъ|ӓ)/gu, 'ай');

	res = res.replaceAll(/(Ӱъ|Ӱ)/gu, 'Уй');
	res = res.replaceAll(/(ӱъ|ӱ)/gu, 'уй');

	res = res.replaceAll(/(Ёъ|Ё|Ӭ)/gu, 'Ей');
	res = res.replaceAll(/(ёъ|ё|ӭ)/gu, 'ей');

	res = res.replaceAll(/(Ӧъ|Ӧ)/gu, 'Ой');
	res = res.replaceAll(/(ӧъ|ӧ)/gu, 'ой');

	res = res.replaceAll(/(Ю̈ъ|Ю̈)/gu, 'Юй');
	res = res.replaceAll(/(ю̈ъ|ю̈)/gu, 'юй');

	res = res.replaceAll(/(Я̈ъ|Я̈)/gu, 'Яй');
	res = res.replaceAll(/(я̈ъ|я̈)/gu, 'яй');

	res = res.replaceAll(/(Є̈ъ|Є̈)/gu, 'Єй');
	res = res.replaceAll(/(є̈ъ|є̈)/gu, 'єй');

	res = res.replaceAll(/(ӥъ|ӥ|ӹ)/gu, 'єй');
	res = res.replaceAll(/(Ӥъ|Ӥ)/gu, 'єй');

	res = res.replaceAll(/(Ҋъ|Ҋ)/gu, 'Ій');
	res = res.replaceAll(/(ҋъ|ҋ)/gu, 'ій');

	res = res.replaceAll('ы̆', 'ив');
	res = res.replaceAll('ы̄', 'ию');

	res = res.replaceAll('јъ', 'й');

	res = res.replaceAll('ҍ', '');
	res = res.replaceAll('ꙏ', '');

	res = res.replaceAll('', 'і');
	res = res.replaceAll('', 'і');

	res = res.replaceAll('Т̓', 'Тх');
	res = res.replaceAll('т̓', 'тх');

	res = res.replaceAll('Ю̄', 'Юю');
	res = res.replaceAll('ю̄', 'юю');

	res = res.replaceAll('Ю̆', 'Юв');
	res = res.replaceAll('ю̆', 'юв');

	res = res.replaceAll('Я̄', 'Яя');
	res = res.replaceAll('я̄', 'яя');

	res = res.replaceAll('Ӫ', 'Ює');
	res = res.replaceAll('ӫ', 'ює');

	res = res.replaceAll('Ꙗ', 'Іа');
	res = res.replaceAll('ꙗ', 'іа');

	res = res.replaceAll('Ѥ', 'Іє');
	res = res.replaceAll('ѥ', 'іє');

	res = res.replaceAll('Ԙ', 'Яє');
	res = res.replaceAll('ԙ', 'яє');

	res = res.replaceAll('Ԑ̈', 'Зню');
	res = res.replaceAll('ԑ̈', 'зню');

	res = res.replaceAll('т̈', 'Тн');
	res = res.replaceAll('Т̈', 'тн');

	res = res.replaceAll(/(Д̈|Ӝ|Ӟ|К̈|Ӵ)/gu, (m) => m[0] + 'ю');
	res = res.replaceAll(/(д̈|ӝ|ӟ|к̈|ӵ)/gu, (m) => m[0] + 'ю');

	res = res.replaceAll(/[к̄д̄т̄з̄с̄л̄н̄ж̄ш̄р̄в̄]/gu, (m) => m[0] + m[0]);
	res = res.replaceAll(/[Д̄Т̄З̄С̄Л̄Н̄К̄Ж̄Ш̄Р̄В̄]/gu, (m) => m[0] + m[0].toLowerCase());

	res = res.replaceAll(/В̌|Г̌|Д̌|Р̌|С̌|Т̌|Х̌/gu, (m) => 'З' + m[0]);
	res = res.replaceAll(/в̌|г̌|д̌|р̌|с̌|т̌|х̌/gu, (m) => 'з' + m[0]);

	res = res.replaceAll('Ӕ', 'Ае');
	res = res.replaceAll('ӕ', 'ае');

	res = res.replaceAll('Ђ', 'Д');
	res = res.replaceAll('ђ', 'д');

	res = res.replaceAll('Ꙃ', 'Дзе');
	res = res.replaceAll('ꙃ', 'дзе');

	res = res.replaceAll('Ԇӏ', 'Дзьо');
	res = res.replaceAll('ԇӏ', 'дзьо');

	res = res.replaceAll('Ԇ', 'Дзь');
	res = res.replaceAll('ԇ', 'дзь');

	res = res.replaceAll('ꚃ', 'Дзв');
	res = res.replaceAll('ꚃ', 'дзв');

	res = res.replaceAll('Ꚉ', 'Дз');
	res = res.replaceAll('ꚉ', 'дз');

	res = res.replaceAll('І̵Ꙋ', 'Йоу');
	res = res.replaceAll('І̵ꙋ', 'йоу');

	res = res.replaceAll('Ꙋ', 'Оу');
	res = res.replaceAll('ꙋ', 'оу');

	res = res.replaceAll('Ꚗ̆', 'Вш');
	res = res.replaceAll('ꚗ̆', 'вш');

	res = res.replaceAll('Ꚏ̆', 'Вц');
	res = res.replaceAll('ꚏ̆', 'вц');

	res = res.replaceAll('Џ̆', 'Цз');
	res = res.replaceAll('џ̆', 'цз');

	res = res.replaceAll('Ꚍ̆', 'Вт');
	res = res.replaceAll('ꚍ̆', 'вт');

	res = res.replaceAll('Ѿ', 'От');
	res = res.replaceAll('ѿ', 'от');

	res = res.replaceAll('Ѯ', 'Кс');
	res = res.replaceAll('ѯ', 'кс');

	res = res.replaceAll('Ѱ', 'Пс');
	res = res.replaceAll('ѱ', 'пс');

	res = res.replaceAll('Ѳ', 'Фт');
	res = res.replaceAll('ѳ', 'фт');

	res = res.replaceAll('Ҩ', 'Іо');
	res = res.replaceAll('ҩ', 'іо');

	res = res.replaceAll('Ѭ', 'Йо');
	res = res.replaceAll('ѭ', 'йо');

	res = res.replaceAll('Ѕ', 'Ст');
	res = res.replaceAll('ѕ', 'ст');

	res = res.replaceAll('Ҥ', 'Нг');
	res = res.replaceAll('ҥ', 'нг');

	res = res.replaceAll('Ꙣ', 'Дг');
	res = res.replaceAll('ꙣ', 'дг');

	res = res.replaceAll('Ꙥ', 'Лг');
	res = res.replaceAll('ꙥ', 'лг');

	res = res.replaceAll('Ꙧ', 'Мг');
	res = res.replaceAll('ꙧ', 'мг');

	res = res.replaceAll('Ҥ̂', 'Нґ');
	res = res.replaceAll('ҥ̂', 'нґ');

	res = res.replaceAll('Ꚇ', 'Чч');
	res = res.replaceAll('ꚇ', 'чч');

	res = res.replaceAll('Ԗ', 'Рх');
	res = res.replaceAll('ԗ', 'рх');

	res = res.replaceAll('Ԕ', 'Лх');
	res = res.replaceAll('ԕ', 'лх');

	res = res.replaceAll('Ӭ̄', 'Єє');
	res = res.replaceAll('ӭ̄', 'єє');

	res = res.replaceAll('Ꙟ', 'Ин');
	res = res.replaceAll('ꙟ', 'ин');

	res = res.replaceAll('Ў', 'Ув');
	res = res.replaceAll('ў', 'ув');

	res = res.replaceAll('Ꚗ', 'Шв');
	res = res.replaceAll('ꚗ', 'шв');

	res = res.replaceAll('Ꚏ', 'Цв');
	res = res.replaceAll('ꚏ', 'цв');

	res = res.replaceAll(/[Ә̄А̄]/gu, 'Аа');
	res = res.replaceAll(/[ә̄а̄]/gu, 'аа');

	res = res.replaceAll(/[Е̄Ъ̄]/gu, 'Ее');
	res = res.replaceAll(/[е̄ъ̄]/gu, 'ее');

	res = res.replaceAll('Џ', 'Зц');
	res = res.replaceAll('џ', 'зц');

	res = res.replaceAll('Ҏ', 'Рт');
	res = res.replaceAll('ҏ', 'рт');

	res = res.replaceAll('Ӗ', 'Еа');
	res = res.replaceAll('ӗ', 'еа');

	res = res.replaceAll('Ҹ', 'Чж');
	res = res.replaceAll('ҹ', 'чж');

	res = res.replaceAll('Ћ', 'Ч');
	res = res.replaceAll('ћ', 'ч');

	res = res.replaceAll('Ө', 'Оє');
	res = res.replaceAll('ө', 'оє');

	res = res.replaceAll('Ꚕ', 'Хв');
	res = res.replaceAll('ꚕ', 'хв');

	res = res.replaceAll('Һ', 'Хр');
	res = res.replaceAll('һ', 'хр');

	res = res.replaceAll('Ԛ', 'Км');
	res = res.replaceAll('ԛ', 'км');

	res = res.replaceAll('Ԭ', 'Дч');
	res = res.replaceAll('ԭ', 'дч');

	res = res.replaceAll('Ҵ̈', 'Тцю');
	res = res.replaceAll('ҵ̈', 'тцю');

	res = res.replaceAll('Ҵ', 'Тц');
	res = res.replaceAll('ҵ', 'тц');

	res = res.replaceAll('Ҁ', 'Коп');
	res = res.replaceAll('ҁ', 'коп');

	res = res.replaceAll('Ꙁ', 'Зм');
	res = res.replaceAll('ꙁ', 'зм');

	res = res.replaceAll('Ꚓ', 'Тч');
	res = res.replaceAll('ꚓ', 'тч');

	res = res.replaceAll('Ꚍ', 'Тв');
	res = res.replaceAll('ꚍ', 'тв');

	res = res.replaceAll('Ꚁ', 'Дв');
	res = res.replaceAll('ꚁ', 'дв');

	res = res.replaceAll('Ꚑ', 'Тс');
	res = res.replaceAll('ꚑ', 'тс');

	res = res.replaceAll(/[ꙪꚚѺꙨꙬѠѪꙌѼ]/gu, 'О');
	res = res.replaceAll(/[ꙫꚛѻꙩꙭѡѫꙍѽ]/gu, 'о');

	res = res.replaceAll(/[ѨӚ]/gu, 'А');
	res = res.replaceAll(/[ѩӛ]/gu, 'а');

	res = res.replaceAll(/[ѦӘ]/gu, 'А');
	res = res.replaceAll(/[ѧә]/gu, 'а');

	res = res.replaceAll(/[ѢꙘЪ]/gu, 'Е');
	res = res.replaceAll(/[ѣꙙъ]/gu, 'е');

	res = res.replaceAll(/[ꙒꙜЪ̈]/gu, 'Є');
	res = res.replaceAll(/[ꙓꙝъ̈]/gu, 'є');

	res = res.replaceAll(/[ꙚꙆѶ]/gu, 'І');
	res = res.replaceAll(/[ꙛꙇѷ]/gu, 'і');

	res = res.replaceAll(/[ѴЫꙐ]/gu, 'И');
	res = res.replaceAll(/[ѵыꙑ]/gu, 'и');

	res = res.replaceAll(/[ꙈԪ]/gu, 'Дж');
	res = res.replaceAll(/[ꙉԫ]/gu, 'дж');

	res = res.replaceAll('Багтꙮ', 'Багато');
	res = res.replaceAll('багтꙮ', 'багато');

	res = res.replaceAll('Мнꙮг', 'Много');
	res = res.replaceAll('мнꙮг', 'много');

	res = res.replaceAll('Ꚙч', 'Очо');
	res = res.replaceAll('ꚙч', 'очо');

	res = res.replaceAll('Ꙕ', 'Оі');
	res = res.replaceAll('ꙕ', 'оі');

	res = res.replaceAll('О̄', 'Оо');
	res = res.replaceAll('о̄', 'оо');

	res = res.replaceAll('Ў', 'Уу');
	res = res.replaceAll('ӯ', 'уу');

	res = res.replaceAll('Ӣ', 'Ии');
	res = res.replaceAll('ӣ', 'ии');

	res = res.replaceAll('Ї̄', 'Її');
	res = res.replaceAll('ї̄', 'її');

	res = res.replaceAll('Ī', 'Іі');
	res = res.replaceAll('ī', 'іі');

	res = res.replaceAll('Ꚅ̆', 'Зжв');
	res = res.replaceAll('ꚅ̆', 'зжв');

	res = res.replaceAll('Ꚅ', 'Зж');
	res = res.replaceAll('ꚅ', 'зж');

	res = res.replaceAll('Ј', 'Й');
	res = res.replaceAll('ј', 'й');

	res = res.replaceAll('Э̆л', 'Елв');
	res = res.replaceAll('э̆л', 'елв');

	res = res.replaceAll('Эл', 'Ел');
	res = res.replaceAll('эл', 'ел');

	res = res.replaceAll('Ц̈', 'Цю');
	res = res.replaceAll('ц̈', 'цю');

	res = res.replaceAll('Ҿ', 'Чк');
	res = res.replaceAll('ҿ', 'чк');

	res = res.replaceAll('Ҽ', 'Вч');
	res = res.replaceAll('ҽ', 'вч');

	res = res.replaceAll('Ҽ̆', 'Чв');
	res = res.replaceAll('ҽ̆', 'чв');

	res = res.replaceAll('Ӡ', 'Зб');
	res = res.replaceAll('ӡ', 'зб');

	res = res.replaceAll('О̆', 'Ое');
	res = res.replaceAll('о̆', 'ое');

	res = res.replaceAll('А̊', 'Ао');
	res = res.replaceAll('а̊', 'ао');

	res = res.replaceAll('У̊', 'Уо');
	res = res.replaceAll('у̊', 'уо');

	res = res.replaceAll('Ӻ', 'Гр');
	res = res.replaceAll('ӻ', 'гр');

	res = res.replaceAll('Ғ̌', 'Гл');
	res = res.replaceAll('ғ̌', 'гл');

	res = res.replaceAll('Ғ', 'Гн');
	res = res.replaceAll('ғ', 'гн');

	res = res.replaceAll('Ҕ', 'Гв');
	res = res.replaceAll('ҕ', 'гв');

	res = res.replaceAll('Ԟ', 'Кр');
	res = res.replaceAll('ԟ', 'кр');

	res = res.replaceAll('Ҡ', 'Кн');
	res = res.replaceAll('ҡ', 'кн');

	res = res.replaceAll('К̆', 'Кв');
	res = res.replaceAll('к̆', 'кв');

	res = res.replaceAll('К̑', 'Вк');
	res = res.replaceAll('к̑', 'вк');

	res = res.replaceAll('Ҟ', 'Кл');
	res = res.replaceAll('ҟ', 'кл');

	res = res.replaceAll('Ӄ', 'Кт');
	res = res.replaceAll('ӄ', 'кт');

	res = res.replaceAll('Ү', 'Уе');
	res = res.replaceAll('ү', 'уе');

	res = res.replaceAll('Ұ', 'Ує');
	res = res.replaceAll('ұ', 'ує');

	res = res.replaceAll('Ԑ', 'Зн');
	res = res.replaceAll('ԑ', 'зн');

	res = res.replaceAll('Ӈ', 'Нч');
	res = res.replaceAll('ӈ', 'нч');

	res = res.replaceAll('Ԩ', 'Чн');
	res = res.replaceAll('ԩ', 'чн');

	res = res.replaceAll('Ԝ', 'Вл');
	res = res.replaceAll('ԝ', 'вл');

	res = res.replaceAll('Ӳ', 'уа');
	res = res.replaceAll('ӳ', 'уа');

	res = res.replaceAll('Ӿ', 'Хж');
	res = res.replaceAll('ӿ', 'хж');

	res = res.replaceAll('Љӏ', 'Льо');
	res = res.replaceAll('љӏ', 'льо');

	res = res.replaceAll('Њӏ', 'Ньо');
	res = res.replaceAll('њӏ', 'ньо');

	res = res.replaceAll('Ᲊӏ', 'Тьо');
	res = res.replaceAll('ᲊӏ', 'тьо');

	res = res.replaceAll('Ԁӏ', 'Дьо');
	res = res.replaceAll('ԁӏ', 'дьо');

	res = res.replaceAll('Ꙡ', 'Ц');
	res = res.replaceAll('ꙡ', 'ц');

	res = res.replaceAll('ӏ', 'ьо');

	res = res.replaceAll('Ԁ', 'Дн');
	res = res.replaceAll('ԁ', 'дн');

	res = res.replaceAll('Θ', 'Тет');
	res = res.replaceAll('ϑ', 'тет');

	res = res.replaceAll('Қ', 'Кх');
	res = res.replaceAll('қ', 'кх');

	res = res.replaceAll('Җ', 'Жр');
	res = res.replaceAll('җ', 'жр');

	res = res.replaceAll('Ҙ', 'Зл');
	res = res.replaceAll('ҙ', 'зл');

	res = res.replaceAll('Ԯ', 'Сл');
	res = res.replaceAll('ԯ', 'сл');

	res = res.replaceAll('Ң', 'Нз');
	res = res.replaceAll('ң', 'нз');

	res = res.replaceAll('Ԥ', 'Пл');
	res = res.replaceAll('ԥ', 'пл');

	res = res.replaceAll('Ҫ', 'Св');
	res = res.replaceAll('ҫ', 'св');

	res = res.replaceAll('Ҭ', 'Тк');
	res = res.replaceAll('ҭ', 'тк');

	res = res.replaceAll('Ҳ', 'Хт');
	res = res.replaceAll('ҳ', 'хт');

	res = res.replaceAll('Ԧ', 'Хм');
	res = res.replaceAll('ԧ', 'хм');

	res = res.replaceAll('Ҷ̈а', 'чаю');
	res = res.replaceAll('ҷ̈а', 'чаю');

	res = res.replaceAll('Ч̣', 'Чх');
	res = res.replaceAll('ч̣', 'чх');

	res = res.replaceAll('Ҷ̣а', 'Чах');
	res = res.replaceAll('ҷ̣а', 'чах');

	res = res.replaceAll('Ҷ', 'Чм');
	res = res.replaceAll('ҷ', 'чм');

	res = res.replaceAll('Ӷ', 'Вг');
	res = res.replaceAll('ӷ', 'вг');

	res = res.replaceAll('Ӌ', 'Мч');
	res = res.replaceAll('ӌ', 'мч');

	res = res.replaceAll('Δ', 'Др');
	res = res.replaceAll('δ', 'др');

	res = res.replaceAll('Ԡ', 'Шл');
	res = res.replaceAll('ԡ', 'шл');

	res = res.replaceAll('Ԣ', 'Нт');
	res = res.replaceAll('ԣ', 'нт');

	res = res.replaceAll('Ҧ', 'Пр');
	res = res.replaceAll('ҧ', 'пр');

	res = res.replaceAll('Ꚋ', 'Тр');
	res = res.replaceAll('ꚋ', 'тр');

	res = res.replaceAll('Ӆ', 'Фл');
	res = res.replaceAll('ӆ', 'фл');

	res = res.replaceAll('Ӎ', 'Мр');
	res = res.replaceAll('ӎ', 'мр');

	res = res.replaceAll('Ӊ', 'Нк');
	res = res.replaceAll('ӊ', 'нк');

	res = res.replaceAll('Ӽ', 'Хл');
	res = res.replaceAll('ӽ', 'хл');

	res = res.replaceAll('Ԓ', 'Лк');
	res = res.replaceAll('ԓ', 'лк');

	res = res.replaceAll('Ղ', 'Гх');
	res = res.replaceAll('ղ', 'гх');

	res = res.replaceAll(/[сзцСЗЦрРДд]ь[яюєі]/gu, (m) => m[0] + m[2]);

	res = res.replaceAll(/Ԏ[яюєі]/gu, (m) => 'Т' + m[1]);
	res = res.replaceAll(/ԏ[яюєі]/gu, (m) => 'т' + m[1]);
	res = res.replaceAll(/Ԍ[яюєі]/gu, (m) => 'С' + m[1]);
	res = res.replaceAll(/ԍ[яюєі]/gu, (m) => 'с' + m[1]);
	res = res.replaceAll(/Ԃ[яє]/gu, (m) => 'Д' + m[1]);
	res = res.replaceAll(/ԃ[яє]/gu, (m) => 'д' + m[1]);
	res = res.replaceAll(/Ԉ[яюєі]/gu, (m) => 'Л' + m[1]);
	res = res.replaceAll(/ԉ[яюєі]/gu, (m) => 'л' + m[1]);
	res = res.replaceAll(/Ԋ[яюєі]/gu, (m) => 'Н' + m[1]);
	res = res.replaceAll(/ԋ[яюєі]/gu, (m) => 'н' + m[1]);
	res = res.replaceAll(/Ԅ[яюєі]/gu, (m) => 'З' + m[1]);
	res = res.replaceAll(/ԅ[яюєі]/gu, (m) => 'з' + m[1]);

	res = res.replaceAll(/Ԏˮ[яюєі]/gu, (m) => 'Ть' + m[2]);
	res = res.replaceAll(/ԏˮ[яюєі]/gu, (m) => 'ть' + m[2]);
	res = res.replaceAll(/Ԍˮ[яюєі]/gu, (m) => 'Сь' + m[2]);
	res = res.replaceAll(/ԍˮ[яюєі]/gu, (m) => 'сь' + m[2]);
	res = res.replaceAll(/Ԃˮ[яюєі]/gu, (m) => 'Дь' + m[2]);
	res = res.replaceAll(/ԃˮ[яюєі]/gu, (m) => 'дь' + m[2]);
	res = res.replaceAll(/Ԉˮ[яюєі]/gu, (m) => 'Ль' + m[2]);
	res = res.replaceAll(/ԉˮ[яюєі]/gu, (m) => 'ль' + m[2]);
	res = res.replaceAll(/Ԋˮ[яюєі]/gu, (m) => 'Нь' + m[2]);
	res = res.replaceAll(/ԋˮ[яюєі]/gu, (m) => 'нь' + m[2]);
	res = res.replaceAll(/Ԅˮ[яюєі]/gu, (m) => 'Зь' + m[2]);
	res = res.replaceAll(/ԅˮ[яюєі]/gu, (m) => 'зь' + m[2]);
	res = res.replaceAll(/Ԃˮ[яюєі]/gu, (m) => 'Дь' + m[2]);
	res = res.replaceAll(/ԃˮ[яюєі]/gu, (m) => 'дь' + m[2]);

	res = res.replaceAll('ˮ', '');

	res = res.replaceAll('Љ', 'Ль');
	res = res.replaceAll(/[ԉљ]/gu, 'ль');

	res = res.replaceAll('Њ', 'Нь');
	res = res.replaceAll(/[ԋњ]/gu, 'нь');

	res = res.replaceAll('Ᲊ', 'Ть');
	res = res.replaceAll(/[ԏᲊ]/gu, 'ть');

	res = res.replaceAll('Ԍ', 'Сь');
	res = res.replaceAll('ԍ', 'сь');

	res = res.replaceAll('Ԅ', 'Зь');
	res = res.replaceAll('ԅ', 'зь');

	res = res.replaceAll('Ԃ', 'Дь');
	res = res.replaceAll('ԃ', 'дь');

	res = res.replaceAll('წ', 'ць');
	res = res.replaceAll('ჭ', 'чь');
	return res;
}

export function translateFrom(str) {
	return replaceFrom(str);
}
