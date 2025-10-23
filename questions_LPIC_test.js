// Array de preguntas para el cuestionario - TEST
const questions_LPIC_test = [
    {
        question: "Which of the following modes for bonding network interfaces uses only one of its member interfaces at a time?",
        type: "opcion",
        answers: ["A. active-backup", "B. balance-xor", "C. 802.3ad", "D. Broadcast", "E. Balance-rr"],
        correct: 0
    },
    {
        question: "Which of the following SMART values indicate that a hardware error happened in the past? (choose TWO correct answers).",
        type: "varias",
        answers: ["A. Seek_time_Performance", "B. Seek_Error_Rate", "C. Start_Stop_Count", "D. Spin_Up_Time", "E. Reallocated_Sector_Ct"],
        correct: [1, 4]
    },
    {
        question: "What LVM commands adds new physical volumes to an existing volume group? (Specify ONLY the command without any path or parameters)",
        type: "escribir",
        correct: "vgextend"
    },
    {
        question: "What is the conventional name of the network interface referring to the tagged VLAN 295 on enp0s3?",
        type: "opcion",
        answers: ["A. 295@enp0s3", "B. enp0s3v295", "C. enp0s3/v295", "D. 295(enp0s3)", "E. enp0s3.295"],
        correct: 4
    },
    {
        question: "Which of the following expressions uniquely identifies an Autonomous System (AS)?",
        type: "opcion",
        answers: ["A. 1.100.51.198", "B. B25808bd655d", "C. com.example", "D. AS65538", "E. 1.1.0.0"],
        correct: 3
    }
];