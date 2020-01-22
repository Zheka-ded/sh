class Skills {
    constructor (blockName, icon, title, subtitle){
        this.blockName = blockName;
        this.icon = icon;
        this.title = title;
        this.subtitle = subtitle;
    }
    buildSkills (out) {
        let items = document.createElement('div');
        items.classList.add(`${this.blockName}__item`);
        out.append(items);

        let svgWrap = document.createElement('div');
        svgWrap.classList.add(`${this.blockName}__svg-wrap`);
        svgWrap.innerHTML = this.icon;
        items.append(svgWrap);

        let titleText = document.createElement('p');
        titleText.classList.add(`${this.blockName}__title`);
        titleText.textContent = this.title;
        items.append(titleText);

        let subtitleText = document.createElement('p');
        subtitleText.classList.add(`${this.blockName}__subtitle`);
        subtitleText.textContent = this.subtitle;
        items.append(subtitleText);
    }
}