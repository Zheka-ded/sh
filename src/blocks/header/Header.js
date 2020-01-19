class Header {
    constructor(siteName, logo, about, payment, contacts) {
        this.siteName = siteName;
        this.src = logo;
        this.about = about;
        this.payment = payment;
        this.contacts = contacts;
    }
    build (out) {
        // логотип
        let logoLink = document.createElement('a');
        logoLink.classList.add('header__logo-link');
        logoLink.setAttribute('href', 'index.html');
        logoLink.textContent = this.siteName;
        out.append(logoLink);
        // картинка логотипа
        let logoPicture = document.createElement('img');
        logoPicture.classList.add('header__logo');
        logoPicture.setAttribute('src', this.src);
        logoPicture.setAttribute('alt', 'Клоун');
        // отрисовка логотипа
        logoLink.append(logoPicture);
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
        aboutLink.textContent = this.about;
        navAbout.append(aboutLink);
        // добавление payment
        let navPayment = document.createElement('li');
        navListUL.append(navPayment);
        let paymentLink = document.createElement('a');
        paymentLink.classList.add('header__nav-link', 'header__payment');
        paymentLink.setAttribute('href', '#');
        paymentLink.textContent = this.payment;
        navPayment.append(paymentLink);
        // добавление contacts
        let navContacts = document.createElement('li');
        navListUL.append(navContacts);
        let contactsLink = document.createElement('a');
        contactsLink.classList.add('header__nav-link', 'header__contacts');
        contactsLink.setAttribute('href', '#');
        contactsLink.textContent = this.contacts;
        navContacts.append(contactsLink);
    }
}