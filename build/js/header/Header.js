class Header {
    constructor(logoSite, logoName, about, payment, contacts) {
        this.logoSite = logoSite;
        this.logoName = logoName;
        this.about = about;
        this.payment = payment;
        this.contacts = contacts;
    }
    headerBuild (out) {
        // логотип
        let logoLink = document.createElement('a');
        logoLink.classList.add('header__logo-link', 'hexagon');
        logoLink.setAttribute('href', 'index.html');
        logoLink.textContent = this.logoSite;
        out.append(logoLink);
        let logoSpan = document.createElement('span');
        logoSpan.classList.add('logo__span');
        logoSpan.textContent = this.logoName;
        logoLink.append(logoSpan);
        // навигация
        let navHead = document.createElement('nav');
        navHead.classList.add('header__nav');
        // отрисовка навигации
        out.append(navHead);
        // список меню
        let navListUL = document.createElement('ul');
        // отрисовка списка меню
        navHead.append(navListUL);
        // добавление about
        let navAbout = document.createElement('li');
        navListUL.append(navAbout);
        let aboutLink = document.createElement('a');
        aboutLink.classList.add('header__nav-link', 'header__about');
        aboutLink.setAttribute('href', '#');
        aboutLink.setAttribute('data-text', this.about);
        aboutLink.textContent = this.about;
        navAbout.append(aboutLink);
        // добавление payment
        let navPayment = document.createElement('li');
        navListUL.append(navPayment);
        let paymentLink = document.createElement('a');
        paymentLink.classList.add('header__nav-link', 'header__payment');
        paymentLink.setAttribute('href', '#');
        paymentLink.setAttribute('data-text', this.payment);
        paymentLink.textContent = this.payment;
        navPayment.append(paymentLink);
        // добавление contacts
        let navContacts = document.createElement('li');
        navListUL.append(navContacts);
        let contactsLink = document.createElement('a');
        contactsLink.classList.add('header__nav-link', 'header__contacts');
        contactsLink.setAttribute('href', '#');
        contactsLink.setAttribute('data-text', this.contacts);
        contactsLink.textContent = this.contacts;
        navContacts.append(contactsLink);
    }
}