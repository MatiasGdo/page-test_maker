// Preguntas DevOps - Parte 2 (preguntas 11-20)
const questions_devops_part2 = [
    {
        question: "Which of the following statements are true about an object storage system as OpenStack Swift? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Object names are not allowed to contain the / character because all objects are kept in a flat hierarchy.", "B. Objects can be associated with CORS headers which are served to a client retrieving the object.", "C. Objects with a name ending in .htaccess are parsed as configuration files to limit access to other objects.", "D. Objects flagged as executable can contain script code which is run on the object store when the object is accessed.", "E. Objects are accessible via HTTP and, given appropriate permissions, can be embedded in a web site."],
        correct: [1, 4]
    },
    {
        question: "What is the difference between the commands git diff and git diff --cached? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. git diff --cached shows changes that will be included in the next commit", "B. git diff shows changes that were not added to the next commit.", "C. git diff --cached shows changes of all commits that were not pushed to origin yet.", "D. git diff and git diff --cached always lead to the same result if a repository does not have at least one remote repository.", "E. git diff --cached shows changes included in the last successful commit of the current branch."],
        correct: [1, 0]
    },
    {
        question: "In a continuous delivery pipeline, which of the following stages exist? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. Build", "B. Test", "C. Deploy", "D. Code", "E. Decommission"],
        correct: [0, 1, 2]
    },
    {
        question: "After creating a new file within a directory which belongs to a Git repository, which commands have to be used in order to make Git manage the new file and upload it to the already existing remote origin? (Choose THREE correct answers)",
        type: "varias",
        answers: ["A. git init", "B. git push", "C. git commit", "D. git remote", "E. git add"],
        correct: [1, 2, 4]
    },
    {
        question: "Which of the following statements are true when using continuous delivery for an application which is subject to strong compliance requirements, such as an SLA? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. The deployment and release of software does not affect the compliance of an application in general.", "B. Given a sufficient number of tests, continuous deployment has no implications on the compliance of an application.", "C. The deployment to production should be subject to manual review and approval.", "D. Continuous delivery increases the risks associated with deployment and is not suited for compliance critical applications.", "E. Continuous delivery limits the risks associated with deployment by using tested automatic procedures."],
        correct: [1, 4]
    },
    {
        question: "Which of the following values stems from the Agile Manifesto?",
        type: "opcion",
        answers: ["A. Processes and tools over individuals and interactions.", "B. Contract negotiation over customer collaboration.", "C. Responding to change over following a plan.", "D. Comprehensive documentation over working software.", "E. Predictability and long-term planning over flexibility and adaption."],
        correct: 2
    },
    {
        question: "Which of the following statements are true regarding microservices? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Microservices complicate updates because individual microservices cannot be changed once an application is delivered.", "B. Microservices allow the combination of different application development platforms within one application.", "C. Microservices are not suited for container deployments due to their complexity and resource consumption.", "D. Microservices limit the risk of updates and deployments because failures only affect a limited amount of functionality.", "E. Microservices interact faster than components within a monolithic software application due to their standardized APIs."],
        correct: [1, 3]
    },
    {
        question: "Which of the following forms of software is used by Cloud Foundry to deploy an application?",
        type: "opcion",
        answers: ["A. A TGZ archive containing the source code used by Cloud Foundry to build and install the application.", "B. An executable file, such as a binary program, script or application archive, which runs on the platform's standard runtime environment.", "C. The URL to a Git repository containing the source code used by Cloud Foundry to Build and install the application.", "D. A Cloud Foundry Object file (.cfo) which has to be created from the application's object code using the cf1 linker.", "E. A virtual machine image which contains an operating system, the application and all required dependencies."],
        correct: 1
    },
    {
        question: "Which of the following benefits are realized by using immutable servers? (Choose TWO correct answers)",
        type: "varias",
        answers: ["A. Immutable servers are usable right after they are started without further configuration.", "B. Immutable servers are flexible in how they are configured during their deployment.", "C. Immutable servers ensure production servers are identical to staging servers.", "D. Immutable servers bundle all components required for an application and never need external services.", "E. Immutable servers are not connected to a network and cannot be attacked remotely."],
        correct: [0, 2]
    },
    {
        question: "In order to execute one step of a declarative Jenkins pipeline on a Jenkins node with a specific set of labels, which element has to be present in the respective stage?",
        type: "opcion",
        answers: ["A. server", "B. selector", "C. slave", "D. executor", "E. agent"],
        correct: 4
    }
];