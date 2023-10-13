using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.API.Migrations
{
    /// <inheritdoc />
    public partial class AddSuperHeroFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IdCity",
                table: "SuperHeroes",
                newName: "cityId");

            migrationBuilder.CreateIndex(
                name: "IX_SuperHeroes_cityId",
                table: "SuperHeroes",
                column: "cityId");

            migrationBuilder.AddForeignKey(
                name: "FK_SuperHeroes_Cities_cityId",
                table: "SuperHeroes",
                column: "cityId",
                principalTable: "Cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SuperHeroes_Cities_cityId",
                table: "SuperHeroes");

            migrationBuilder.DropIndex(
                name: "IX_SuperHeroes_cityId",
                table: "SuperHeroes");

            migrationBuilder.RenameColumn(
                name: "cityId",
                table: "SuperHeroes",
                newName: "IdCity");
        }
    }
}
