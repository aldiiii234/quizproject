import { cs_questions } from "./questions.js";
import { mythology_questions } from "./questions.js";
import { sports_questions } from "./questions.js";
import { history_questions } from "./questions.js";
import { general_knowledge_questions } from "./questions.js";
import { cs_answers } from "./questions.js";
import { mythology_answers } from "./questions.js";
import { sports_answers } from "./questions.js";
import { history_answers } from "./questions.js";
import { general_knowledge_answers } from "./questions.js";

let users_choice = localStorage.getItem("category", JSON.stringify("category"));
let true_button = document.querySelector(".true");
let false_button = document.querySelector(".false");

function current_score() {
  document.getElementById("score-track").textContent = `Score:${score}/10`;
}

function clear_score() {
  document.getElementById("score-track").style.display = "none";
}

function checkScore(final) {
  if (final > 5) {
    document.querySelector(".happy").style.display = "block";
    true_button.style.display = "none";
    false_button.style.display = "none";
  } else if (final <= 5) {
    document.querySelector(".sad").style.display = "block";
    true_button.style.display = "none";
    false_button.style.display = "none";
  }
}

function getClick() {
  return new Promise((acc) => {
    function handleClick() {
      document.removeEventListener("click", handleClick);
      acc();
    }
    true_button.addEventListener("click", handleClick);
    false_button.addEventListener("click", handleClick);
  });
}

let num = 1;

if (users_choice.includes("Computer Science")) {
  document.querySelector(
    ".content"
  ).textContent = `Q.${num} ${cs_questions[0]}`;
  let cs_continuation = cs_questions.slice(1, cs_questions.length);

  async function main() {
    for (let i = 0; i < cs_continuation.length; i++) {
      num++;
      document.querySelector(".fade").style.display = "block";
      await getClick();

      document.querySelector(
        ".content"
      ).textContent = `Q.${num} ${cs_continuation[i]}`;
    }
  }
  main();
} else if (users_choice.includes("Mythology")) {
  let mythology_continuation = mythology_questions.slice(
    1,
    mythology_questions.length
  );
  document.querySelector(
    ".content"
  ).textContent = `Q.${num} ${mythology_questions[0]}`;

  async function main() {
    for (let i = 0; i < mythology_continuation.length; i++) {
      num++;
      document.querySelector(".fade").style.display = "block";

      await getClick();
      document.querySelector(
        ".content"
      ).textContent = `Q.${num} ${mythology_continuation[i]}`;
    }
  }
  main();
} else if (users_choice.includes("Sports")) {
  let sports_continuation = sports_questions.slice(1, sports_questions.length);
  document.querySelector(
    ".content"
  ).textContent = `Q.${num} ${sports_questions[0]}`;

  async function main() {
    for (let i = 0; i < sports_continuation.length; i++) {
      num++;
      document.querySelector(".fade").style.display = "block";

      await getClick();
      document.querySelector(
        ".content"
      ).textContent = `Q.${num} ${sports_continuation[i]}`;
    }
  }
  main();
} else if (users_choice.includes("History")) {
  let history_continuation = history_questions.slice(
    1,
    history_questions.length
  );
  document.querySelector(
    ".content"
  ).textContent = `Q.${num} ${history_questions[0]}`;

  async function main() {
    for (let i = 0; i < history_continuation.length; i++) {
      num++;
      document.querySelector(".fade").style.display = "block";

      await getClick();
      document.querySelector(
        ".content"
      ).textContent = `Q.${num} ${history_continuation[i]}`;
    }
  }
  main();
} else if (users_choice.includes("General Knowledge")) {
  let general_continuation = general_knowledge_questions.slice(
    1,
    general_knowledge_questions.length
  );
  document.querySelector(
    ".content"
  ).textContent = `Q.${num} ${general_knowledge_questions[0]}`;

  async function main() {
    for (let i = 0; i < general_continuation.length; i++) {
      num++;
      document.querySelector(".fade").style.display = "block";

      await getClick();
      document.querySelector(
        ".content"
      ).textContent = `Q.${num} ${general_continuation[i]}`;
    }
    console.log("done");
  }
  main();
}

// Comparing the answer to each question based on which button user clicked and keeping track of the score

let score = 0;
if (users_choice.includes("Computer Science")) {
  document.querySelector(".content");
  async function main() {
    for (let i = 0; i <= cs_answers.length; i++) {
      true_button.onclick = function () {
        if (cs_answers[i] === "True") {
          score++;
          current_score();
        }
      };

      false_button.onclick = function () {
        if (cs_answers[i] === "False") {
          score++;
          current_score();
        }
      };
      await getClick();
    }
    clear_score();
    document.querySelector(
      ".content"
    ).textContent = `Your final score is ${score}/10`;
    checkScore(score);
  }
  main();
} else if (users_choice.includes("History")) {
  async function main() {
    for (let i = 0; i <= history_answers.length; i++) {
      // console.log(i);
      true_button.onclick = function () {
        if (history_answers[i] === "True") {
          score++;
          current_score();
        }
      };

      false_button.onclick = function () {
        if (history_answers[i] === "False") {
          score++;
          current_score();
        }
      };
      await getClick();
    }
    clear_score();
    document.querySelector(
      ".content"
    ).textContent = `Your final score is ${score}/10`;
    checkScore(score);
  }
  main();
} else if (users_choice.includes("Mythology")) {
  async function main() {
    for (let i = 0; i <= mythology_answers.length; i++) {
      // console.log(i);
      true_button.onclick = function () {
        if (mythology_answers[i] === "True") {
          score++;
          current_score();
        }
      };

      false_button.onclick = function () {
        if (mythology_answers[i] === "False") {
          score++;
          current_score();
        }
      };
      await getClick();
    }
    clear_score();
    document.querySelector(
      ".content"
    ).textContent = `Your final score is ${score}/10`;
    checkScore(score);
  }
  main();
} else if (users_choice.includes("Sports")) {
  async function main() {
    for (let i = 0; i <= sports_answers.length; i++) {
      true_button.onclick = function () {
        if (sports_answers[i] === "True") {
          score++;
          current_score();
        }
      };

      false_button.onclick = function () {
        if (sports_answers[i] === "False") {
          score++;
          current_score();
        }
      };
      await getClick();
    }
    clear_score();
    document.querySelector(
      ".content"
    ).textContent = `Your final score is ${score}/10`;
    checkScore(score);
  }
  main();
} else if (users_choice.includes("General Knowledge")) {
  async function main() {
    for (let i = 0; i <= general_knowledge_answers.length; i++) {
      true_button.onclick = function () {
        if (general_knowledge_answers[i] === "True") {
          score++;
          current_score();
        }
      };

      false_button.onclick = function () {
        if (general_knowledge_answers[i] === "False") {
          score++;
          current_score();
        }
      };
      await getClick();
    }
    clear_score();
    document.querySelector(
      ".content"
    ).textContent = `Your final score is ${score}/10`;
    checkScore(score);
  }
  main();
}
