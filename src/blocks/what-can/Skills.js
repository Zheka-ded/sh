class Skills {
    constructor (icon, title, subtitle){
        this.icon = icon;
        this.title = title;
        this.subtitle = subtitle;
        // this.userDescription = userDescription;
    }
    buildSkills (out) {
        let items = document.createElement('div');
        items.classList.add('what-can__item');
        out.append(items);

        let svgWrap = document.createElement('div');
        svgWrap.classList.add('hexagon', 'what-can__svg-wrap');
        svgWrap.innerHTML = this.icon;
        items.append(svgWrap);

        let titleText = document.createElement('p');
        titleText.classList.add('what-can__title');
        titleText.textContent = this.title;
        items.append(titleText);

        let subtitleText = document.createElement('p');
        subtitleText.classList.add('what-can__title');
        subtitleText.textContent = this.subtitle;
        items.append(subtitleText);
    }
}