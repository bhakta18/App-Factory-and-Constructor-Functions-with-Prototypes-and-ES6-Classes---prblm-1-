function CreateApp1(appName, rating, developer, category, platform, price) {
    return {
        appName: appName,
        rating: rating,
        developer: developer,
        category: category,
        platform: platform,
        price: price,

        getAppInfo: function () {
            return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
        },

        getPrice: function () {
            return this.price;
        },

        increasePrice: function (amount) {
            this.price += amount;
            return this.price;
        },

        decreasePrice: function (amount) {
            this.price -= amount;
            return this.price;
        },

        isPopular: function () {
            return this.rating >= 3;
        }
    };
}

function CreateApp2(appName, rating, developer, category, platform, price) {
    this.appName = appName;
    this.rating = rating;
    this.developer = developer;
    this.category = category;
    this.platform = platform;
    this.price = price;
}

CreateApp2.prototype.getAppInfo = function () {
    return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
};

CreateApp2.prototype.getPrice = function () {
    return this.price;
};

CreateApp2.prototype.increasePrice = function (amount) {
    this.price += amount;
    return this.price;
};

CreateApp2.prototype.decreasePrice = function (amount) {
    this.price -= amount;
    return this.price;
};

CreateApp2.prototype.isPopular = function () {
    return this.rating >= 3;
};

class CreateApp3 {
    constructor(appName, rating, developer, category, platform, price) {
        this.appName = appName;
        this.rating = rating;
        this.developer = developer;
        this.category = category;
        this.platform = platform;
        this.price = price;
    }

    getAppInfo() {
        return `${this.appName} (Rating: ${this.rating}) by ${this.developer}`;
    }

    getPrice() {
        return this.price;
    }

    increasePrice(amount) {
        this.price += amount;
        return this.price;
    }

    decreasePrice(amount) {
        this.price -= amount;
        return this.price;
    }

    isPopular() {
        return this.rating >= 3;
    }
}
