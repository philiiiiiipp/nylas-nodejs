import RestfulModel from './restful-model';
import Attributes from './attributes';

export default class EmailParticipant extends RestfulModel {
  toJSON() {
    const json = super.toJSON(...arguments);
    if (!json['name']) {
      json['name'] = json['email'];
    }
    delete json['object'];
    return json;
  }
}
EmailParticipant.collectionName = 'email-participants';
EmailParticipant.attributes = {
  name: Attributes.String({
    modelKey: 'name',
  }),
  email: Attributes.String({
    modelKey: 'email',
  }),
};
