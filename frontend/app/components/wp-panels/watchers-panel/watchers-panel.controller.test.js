// -- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2015 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
// ++

describe('WatchersPanelController', function() {
  var $controller, $rootScope, $q, locals;

  var emptyLink = {
    $load: function() {
      return $q.when([]);
    }
  }
  var workPackage = {
    watchers: emptyLink,
    availableWatchers: emptyLink
  };

  beforeEach(angular.mock.module('openproject.workPackages.controllers'));

  beforeEach(inject(['$controller', '$rootScope', '$q', function(ctrl, root, _$q_) {
    $controller = ctrl;
    $rootScope = root;
    $q = _$q_;

    locals = {
      $scope: $rootScope.$new()
    };
  }]));

  it('should exist', function() {
    expect($controller('WatchersPanelController', locals, { workPackage: workPackage })).to.exist;
  });

  it('should not work without a work workPackage', function() {
    expect(function() {
      $controller('WatchersPanelController', locals);
    }).to.throw;
  });
});

