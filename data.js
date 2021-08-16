var defaultThreads = [
    {
        id: 1,
        title: "Labcraft Chat",
        author: "CLMilkshake",
        content: "Thread content",
        comments: [
            {
                author: "CLMilkshake",
                date: Date.now(),
                content: "Welcome to Labcraft Chat. Be careful with sensitive Info. You will appear as Anonymous."
            }
        ]
    },
]
var threads = defaultThreads
if (localStorage && localStorage.getItem('threads2')) {
    threads = JSON.parse(localStorage.getItem('threads2'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
