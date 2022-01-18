module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define("Genre", {
        genreId : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        genreName : {
            type: DataTypes.STRING
        }
    })

    // Assosiating the genre with the books
    Genre.associate = (models) => {
        Genre.hasMany(models.Book, {
            foreignKey: 'genreId'
          });
    }

    return Genre
  }