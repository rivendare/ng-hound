import angular from 'angular'

import '../style/app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    console.log('test')
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

angular.module(MODULE_NAME, [])
  .directive('app', app)
      .controller('AppCtrl', AppCtrl);

export default MODULE_NAME
