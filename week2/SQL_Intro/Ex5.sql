
SELECT * FROM dolphin;

UPDATE dolphin SET healthy = FALSE
WHERE color = "green" OR color = "brown";

SELECT * FROM dolphin;