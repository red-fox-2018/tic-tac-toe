# tic-tac-toe

FUNCTION tictactoe parameter ()
  SET RESULT ke []
  SET COUNT O sama dengan 0
  SET COUNT X sama dengan 0

  LOOP index i = 0, index i kurang dari 3, increment satu
    SET ROW ke []
    LOOP index j= 0, index j kurang dari 3, increment satu
      SET RANDOM sama dengan pembulatan ROUND dari random
      IF RANDOM sama dengan 1 dan COUNT O kurang dari 5
        PUSH 'X' ke ROW
        COUNT O + 1
      END IF
      ELSE IF RANDOM sama dengan 0 dan COUNT X kurang dari 5
        PUSH 'O' ke ROW
        COUNT X + 1
      END ELSE IF
      ELSE IF COUNT X sama dengan 5
        PUSH 'O' ke ROW
      END ELSE IF
      ELSE IF COUNT O sama dengan 5
        PUSH 'X' ke ROW
      END ELSE IF
    END LOOP
    PUSH ROW ke RESULT
  END LOOP
  RETURN RESULT
END FUNCTION
