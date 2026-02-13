// ====== INSCRIPTION ======
function register() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!phone.startsWith("+243")) {
    alert("Numéro invalide");
    return;
  }

  if (password.length < 4) {
    alert("Mot de passe trop court");
    return;
  }

  if (password !== confirm) {
    alert("Les mots de passe ne correspondent pas");
    return;
  }

  localStorage.setItem("user_phone", phone);
  localStorage.setItem("user_password", password);
  localStorage.setItem("balance", "0");

  alert("Inscription réussie");
  window.location.href = "index.html";
}

// ====== CONNEXION ======
function login() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  const savedPhone = localStorage.getItem("user_phone");
  const savedPassword = localStorage.getItem("user_password");

  if (phone === savedPhone && password === savedPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Numéro ou mot de passe incorrect");
  }
}

// ====== SOLDE ======
function loadBalance() {
  const balance = localStorage.getItem("balance") || "0";
  const el = document.getElementById("balance");
  if (el) {
    el.innerText = "Solde : " + balance + " FC";
  }
}

// ====== RECHARGE ======
function recharge() {
  const amount = parseInt(document.getElementById("amount").value);
  let balance = parseInt(localStorage.getItem("balance") || "0");

  if (!amount || amount <= 0) {
    alert("Montant invalide");
    return;
  }

  balance += amount;
  localStorage.setItem("balance", balance.toString());

  alert("Recharge réussie");
  window.location.href = "dashboard.html";
}

// ====== RETRAIT ======
function withdraw() {
  const amount = parseInt(document.getElementById("withdrawAmount").value);
  let balance = parseInt(localStorage.getItem("balance") || "0");

  if (!amount || amount <= 0) {
    alert("Montant invalide");
    return;
  }

  if (amount > balance) {
    alert("Solde insuffisant");
    return;
  }

  balance -= amount;
  localStorage.setItem("balance", balance.toString());

  alert("Retrait effectué");
  window.location.href = "dashboard.html";
}

// ====== DÉCONNEXION ======
function logout() {
  window.location.href = "index.html";
}
