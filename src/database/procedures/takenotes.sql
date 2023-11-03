CREATE OR ALTER PROCEDURE takingNotes(
    @note_id VARCHAR (50) ,
    @title VARCHAR (200) ,
    @description TEXT
)
AS
BEGIN

INSERT INTO Notes
(note_id,title,description )
VALUES( @note_id, @title, @description)

END
select * from Notes

DROP PROCEDURE takingNotes
