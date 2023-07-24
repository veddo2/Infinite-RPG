export default class itemsheet extends itemsheet {
    get template() {
        return 'systems/ieng/templates/sheets/${this.items.data.type}-sheets.html';
    }

}