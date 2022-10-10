const quotes = [
    {
    quote: '공부 안 하면 더울때 더운데서 일하고 추울떄 추운데서 일한다.',
    },
    {
    quote: '인생은 한방이 아니다.',
    },
    {
    quote: '세상은 넓고 할 일은 많지 않다.',
    },
    {
    quote: '시작은 시작일 뿐이다.',
    },
    {
    quote: '"내 너 그럴줄 알았다." 알았으면 제발 미리 말을 해줘라.',
    },
    {
    quote: '늦었다고 생각할 때는 이미 늦은거다.',
    },
    {
    quote: '내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.',
    },
    {
    quote: '가는 말이 고우면 얕본다.',
    },
    {
    quote: '고생 끝에 골병난다.',
    },
    {
    quote: '즐길 수 없으면 피해라.',
    },
    {
    quote: '참을 인 세번이면 호구다.',
    },
    {
    quote: '일찍 일어나는 새가 피곤하다.',
    },
    {
    quote: '절대절대 포기하지 않는다.'
    },
    {
    quote: "오늘 밥이 야무지네."
    },
    ];

    const quote = document.querySelector("#quote span:first-child");

    const todayQuote = quotes[Math.floor(Math.random()* quotes.length)];

    quote.innerText = todayQuote.quote;