import React from "react";
import Project from "./Project";
import hotel1 from "../images/project-images/Hotel1.png";
import hotel2 from "../images/project-images/Hotel2.png";
import hotel3 from "../images/project-images/Hotel3.png";
import hotel4 from "../images/project-images/Hotel4.png";
import edge1 from "../images/project-images/Edge1.png";
import edge2 from "../images/project-images/Edge2.png";
import edge3 from "../images/project-images/Edge3.png";
import edge4 from "../images/project-images/Edge4.png";
import feedback1 from "../images/project-images/Feedback1.png";
import feedback2 from "../images/project-images/Feedback2.png";
import feedback3 from "../images/project-images/Feedback3.png";
import pet1 from "../images/project-images/Pet1.png";
import pet2 from "../images/project-images/Pet2.png";
import pet3 from "../images/project-images/Pet3.png";

function ProjectList() {
  const dogAdoption =
    "Website for dogs and cats adoption. Users can search for available pets";
  const hotelDescription =
    "Magnificent UI for Hotel to attract more and more customers";
  const financialAid =
    "Website of the company which provides financial assistance";
  const feedback =
    "Gives the feedback about the customer satisfaction during a restaurant visit";

  return (
    <div className="work-container">
      <div className="project-item">
        <Project
          photos={[hotel1, hotel2, hotel3, hotel4]}
          title={"Hotel Website"}
          description={hotelDescription}
          link={
            "https://users.encs.concordia.ca/~s_harin/Soen287/hotel_website/index.html"
          }
          id={1}
        />
      </div>
      <div className="project-item">
        <Project
          photos={[edge1, edge2, edge3, edge4]}
          title={"Financial Services Website"}
          description={financialAid}
          link={
            "https://users.encs.concordia.ca/~s_harin/Soen287/Edge-ledger/index.html"
          }
          id={2}
        />
      </div>
      <div className="project-item">
        <Project
          photos={[feedback1, feedback2, feedback3]}
          title={"Feedback UI"}
          description={feedback}
          link={"https://feeback-ui.netlify.app/"}
          id={3}
        />
      </div>
      <div className="project-item">
        <Project
          photos={[pet1, pet2, pet3]}
          title={"Pet Adoption Website"}
          description={dogAdoption}
          link={
            "https://users.encs.concordia.ca/~s_harin/Soen287/PetAdoption/home.php"
          }
          id={4}
        />
      </div>

      <div className="java-code">
        <pre>
          {`
            /**
            * 
            * @author HARINDER PARTAP SINGH 
            * 
            * Ladder And Snake game with any number of players.
            * The player turn is selected upon throwing the dice. If the dice thrown is tied, then it is thrown again until players 
            * have unique dice numbers.
            *
            */

            public class LadderAndSnake {
              private static Player[] players;
              static int[][] gameBoard;
              static int[] playerTurn;
              static int counter = 0;
              static boolean won;

              /**
               * Class constructor
               */
              public LadderAndSnake() {
                players = null;
                gameBoard = null;
              }

              /**
               * Class constructor specifying the number of players and creates the 2-D board.
               * Players are assigned names.
               * 
               * @param numberOfPlayer the total number of players.
               */
              public LadderAndSnake(int numberOfPlayer) {
                players = new Player[numberOfPlayer];
                createPlayers(numberOfPlayer);
                playerTurn = new int[numberOfPlayer];
                createBoard();
              }

              /**
               * Creates a 2 D array of game. The board is set in a way such that all the
               * values in the board are zeroes except the locations with snake or ladders.
               */
              public static void createBoard() {
                gameBoard = new int[10][10];
                for (int i = 0; i < gameBoard.length; i++) {
                  for (int j = 0; j < gameBoard.length; j++) {
                    gameBoard[i][j] = 0;
                  }
                }
                gameBoard[0][0] = 38;
                gameBoard[0][3] = 14;
                gameBoard[0][8] = 31;
                gameBoard[1][4] = 6;
                gameBoard[2][0] = 42;
                gameBoard[2][7] = 84;
                gameBoard[3][4] = 44;
                gameBoard[4][7] = 30;
                gameBoard[5][9] = 67;
                gameBoard[6][3] = 60;
                gameBoard[7][0] = 100;
                gameBoard[7][9] = 91;
                gameBoard[9][2] = 78;
                gameBoard[9][3] = 76;
                gameBoard[9][5] = 24;
                gameBoard[9][7] = 68;

                System.out.println("-----------------------------------------------------------------------------------"
                    + "\t\t\t\tDisplaying Board-----------------------------------------------------------------------------------");
                int count = 0;
                for (int i = 100; i > 0; i--) {
                  count++;
                  if (((i / 10) % 2 != 0) && count == 11) {
                    System.out.println();
                    for (int j = i - 9; j <= i; j++) {
                      System.out.printf("%8d", j);
                    }
                    i -= 9;

                  } else {
                    System.out.printf("%8d", i);

                  }

                  if (count == 11) {
                    System.out.println();
                    count = 0;

                  }
                }
                System.out.println("-----------------------------------------------------------------------------------\n"
                    + "\t\t\t\tGame Begins-----------------------------------------------------------------------------------");
              }

              /**
               * Sets the player turns and then starts the game. The game ends if any of the
               * player reaches 100.
               */
              public void play() {
                decidePlayerTurn();
                boolean flag = false;

                while (!flag) {

                  for (Player player : players) {
                    if (!won) {
                      playerLocation(player);
                    } else {
                      flag = true;
                    }
                  }
                  if (!won) {
                    System.out.println(" Game not over, flipping again\n");
                  }
                }
              }

              /**
               * Decides the player turns as per their dice value. The player will play in the
               * decreasing order of their dice value. The player with higest value gets to
               * play first. The array is created and sorted according to the dice turn.After
               * sorting, the players with same dice values throws the dice again to break the
               * tie.
               */
              public static void decidePlayerTurn() {

                for (int i = 0; i < players.length; i++) {
                  int diceNumber = flipDice();
                  players[i].setPlayTurn(diceNumber);
                  playerTurn[i] = diceNumber;
                  System.out.println(" " + players[i].getName() + " got a dice value of " + diceNumber);
                }

                sortArray(0, playerTurn.length - 1);
                findDuplicates(0, playerTurn.length - 1);

                System.out.print("\n Reached final decision on order of playing: ");
                for (int i = 0; i < players.length; i++) {
                  System.out.print((i + 1) + ":" + players[i].getName() + " ");
                }
                System.out.println("\n");

              }

              /**
               * Find the duplicates in the player turn array and calls the sort method after
               * finding the duplicates.
               * 
               * @param startIndex the start index to find duplicates
               * @param endIndex   the end index to find duplicates
               */
              public static void findDuplicates(int startIndex, int endIndex) {

                for (int i = startIndex; i < endIndex; i++) {

                  int duplicate = 0;
                  for (int j = i + 1; j <= endIndex; j++) {

                    if (playerTurn[i] == playerTurn[j]) {
                      duplicate = playerTurn[i];
                      System.out.print("\n A tie was achieved between ");

                      int lastIndex = 0;
                      for (int k = i; k <= endIndex; k++) {
                        if (players[k].getTurn() == duplicate) {
                          System.out.print(players[k].getName() + ", ");
                          lastIndex = k;
                        }
                      }
                      System.out.print("Attempting to break the tie\n");

                      for (int l = i; l <= endIndex; l++) {
                        if (players[l].getTurn() == duplicate) {
                          int diceNumber = flipDice();
                          playerTurn[l] = diceNumber;
                          players[l].setPlayTurn(diceNumber);
                          System.out.printf(" %s got a dice value of %d \n", players[l].getName(), diceNumber);
                        }
                      }

                      sortArray(i, lastIndex);
                      i = lastIndex;

                      break;
                    }

                  }
                }
              }

              /**
               * Sorts both the arrays of players and player turns in descending order.
               * Sorting of array helps the program to identify which player will play first.
               * 
               * @param startIndex start index of the array.
               * @param endIndex   end index of the array.
               */

              public static void sortArray(int startIndex, int endIndex) {
                for (int i = startIndex; i < endIndex; i++) {

                  for (int j = i + 1; j <= endIndex; j++) {

                    if (playerTurn[i] < playerTurn[j]) {

                      Player tmp = players[i];
                      players[i] = players[j];
                      players[j] = tmp;
                      int temp = playerTurn[i];
                      playerTurn[i] = playerTurn[j];
                      playerTurn[j] = temp;
                    }
                  }
                }

                if (counter > 0) {

                  findDuplicates(startIndex, endIndex);
                }
                counter++;
              }

              /**
               * The flipDice() method flips the dice.
               * 
               * @return the dice value between 1 and 6 after flipping.
               */
              public static int flipDice() {
                return (int) (Math.random() * 6) + 1;
              }

              /**
               * Changes the location of the player after verifying the snake and ladder. If
               * the location exceeds 100 then the number exceeded is subtracted from 100. The
               * location is set to new location if snake or ladder is present.
               * 
               * @param player the player whose location needs to be determined.
               */
              public static void playerLocation(Player player) {
                int column = 0;
                int row = 0;
                int diceValue = flipDice();
                player.setLocation(diceValue);

                int playerPosition = player.getLocation();

                if (playerPosition > 100) {
                  int newLocation = 100 - ((player.location) - 100);
                  player.location = newLocation;
                  playerPosition = player.getLocation();
                }

                row = playerPosition / 10;
                if (playerPosition % 10 == 0) {
                  row -= 1;
                }

                if (row % 2 == 0) {
                  column = (playerPosition - 1) - (row * 10);
                } else {
                  column = ((row * 10) + 10) - playerPosition;
                }

                if (gameBoard[row][column] != 0) {

                  int newLocation = gameBoard[row][column];

                  if (newLocation > playerPosition) {

                    System.out.println(" " + player.getName() + " got a dice value of " + diceValue + " gone to square "
                        + player.location + " took the ladder then up to " + newLocation);
                  } else {
                    System.out.println(" " + player.getName() + " got a dice value of " + diceValue + " gone to square "
                        + player.location + " bitten by a snake then down to " + newLocation);
                  }
                  player.location = newLocation;

                } else {

                  System.out.println(" " + player.getName() + " got a dice value of " + diceValue + " now  in square "
                      + player.location);

                }
                won = isWinner(player);

              }

              /**
               * Creates the player names according to the player numbers.
               * 
               * @param numberOfPlayers the total number of players.
               */
              public static void createPlayers(int numberOfPlayers) {
                String[] playerNames = { "Ranger", "Tarzan", "M.Bean", "Marvel","Harry","Prabh","Harman","Mehar","Happy","Rommy","Ram","Sham","Tom","Hum"};

                for (int i = 0; i < numberOfPlayers; i++) {
                  players[i] = new Player(playerNames[i]);

                }
              }

              /**
               * Checks if the player has reached the final position that is 100. If any
               * player reached 100 then the value returned is true.
               * 
               * @param player the player which needs to be checked if he is winner
               * 
               * @return true if player has rached 100.
               */
              public static boolean isWinner(Player player) {
                if (player.getLocation() == 100) {
                  System.out.printf("       ______________________________________\n"
                      + "_______| Congrats %s, you won the game  |______\n       |____________________________________|",
                      player.getName());
                  return true;
                } else {
                  return false;
                }
              }

            }
          `}
        </pre>
      </div>
    </div>
  );
}

export default ProjectList;
