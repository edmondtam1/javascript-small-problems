var cars = [{
    make: 'Honda',
    image: 'images/honda-accord-2005.jpg',
    model: 'Accord',
    year: 2005,
    price: 7000
  },
  {
    make: 'Honda',
    image: 'images/honda-accord-2008.jpg',
    model: 'Accord',
    year: 2008,
    price: 11000
  },
  {
    make: 'Toyota',
    image: 'images/toyota-camry-2009.jpg',
    model: 'Camry',
    year: 2009,
    price: 12500
  },
  {
    make: 'Toyota',
    image: 'images/toyota-corrolla-2016.jpg',
    model: 'Corolla',
    year: 2016,
    price: 15000
  },
  {
    make: 'Suzuki',
    image: 'images/suzuki-swift-2014.jpg',
    model: 'Swift',
    year: 2014,
    price: 9000
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 25000
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 26000
  },
];

$(function() {
  var App = {
    filters: {},
    ignoredHeaders: ['image'],
    filters_tmpl: Handlebars.compile($("#filters_tmpl").html()),
    car_tmpl: Handlebars.compile($("#car_tmpl").html()),
    $filter: $("#filters"),
    $filter_btn: undefined,
    setCategories: function() {
      Object.keys(cars[0]).forEach(function(key) {
        if (!this.ignoredHeaders.includes(key)) {
          this.filters[key] = [];
        }
      }.bind(this));
    },
    generateFilters: function(car_list, unfiltered) {
      this.setCategories();
      Object.keys(this.filters).forEach(function(key) {
        var arr = [];
        car_list.forEach(function(obj) {
          if (!arr.includes(obj[key])) arr.push(obj[key]);
        });
        arr = arr.map(val => {
          return {
            name: val
          }
        });
        this.filters[key] = arr;
      }.bind(this));
      this.filters['unfiltered'] = unfiltered;
    },
    populateFilters: function() {
      $("#filters").html(this.filters_tmpl(this.filters));
      this.$filter_btn = $(".filter_btn");
    },
    setFilters: function(car_list, unfiltered) {
      this.generateFilters(car_list, unfiltered);
      this.populateFilters();
    },
    renderCars: function(cars) {
      $("#cars").html(this.car_tmpl({
        cars: cars,
      }));
    },
    handleSubFilters: function(e) {
      e.preventDefault();
      console.log(e);
      var category = e.target.name;
      var filter = $(e.target).val();
      this.setFilters(cars.filter(function(car) {
        return String(car[category]) === filter;
      }), false);
    },
    handleFilter: function(e) {
      e.preventDefault();
      var filters = $("#filters").serializeArray().filter(function(fil) {
        return fil.value !== '';
      });
      var filteredCars = cars.filter(function(car) {
        for (var i = 0; i < filters.length; i++) {
          var prop = filters[i].name;
          var val = filters[i].value;
          if (String(car[prop]) !== val) return false;
        }
        return true;
      });
      this.renderCars(filteredCars);
    },
    setFilterHandlers: function() {
      this.$filter.on("change", "select", this.handleSubFilters.bind(this));
      this.$filter.on("submit", this.handleFilter.bind(this));
    },
    init: function() {
      Handlebars.registerPartial("options", $("#options_tmpl").html());
      this.setFilters(cars, true);
      this.renderCars(cars);
      this.setFilterHandlers();
    }
  }

  App.init();
});