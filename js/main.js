"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import "@babel/polyfill";

var app = {
  getFilms: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, _ref2, results;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("I was called");
              _context.prev = 1;
              _context.next = 4;
              return fetch('https://swapi.co/api/films/');

            case 4:
              response = _context.sent;

              if (!response.ok) {
                _context.next = 12;
                break;
              }

              console.log("It's ok");
              //object assignment destructuring here
              _context.next = 9;
              return response.json();

            case 9:
              _ref2 = _context.sent;
              results = _ref2.results;
              return _context.abrupt("return", results);

            case 12:
              return _context.abrupt("return", []);

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);


              console.err('testing', _context.t0);
              //return Promise.reject("The fetch request failed..",err)

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 15]]);
    }));

    function getFilms() {
      return _ref.apply(this, arguments);
    }

    return getFilms;
  }(),
  displayList: function displayList(films) {
    var list = films.map(function (film) {
      return {
        episodeId: film.episode_id,
        title: film.title,
        releaseDate: film.release_date
      };
    }).sort(function (a, b) {
      return a.episodeId - b.episodeId;
    });

    var target = document.getElementById('movie-list');
    var ul = document.createElement('ul');
    list.forEach(function (film) {
      var li = document.createElement('li');
      li.innerHTML = "\n        Episode " + film.episodeId + ": \n        <strong>" + film.title + "</strong> \n        <em> (released " + film.releaseDate + ")</em>";
      ul.appendChild(li);
    });
    target.appendChild(ul);
  }
};

app.getFilms().then(app.displayList);