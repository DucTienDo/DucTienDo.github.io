<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Comet demo</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>

<body>

    <div id="content">
        <?php
        $log = dirname(__FILE__) . '/chatlog.txt';
        $content = file_get_contents($log);
        $content = explode(PHP_EOL, $content);
        foreach ($content as $i) {
            echo "<p>{$i}</p>";
        }
        ?>
    </div>

    <p>
        <form action="" method="get">
            <input type="text" name="word" id="word" value="" />
            <input type="submit" name="submit" value="Send" />
        </form>
    </p>
    <script type="text/javascript" src="index.js"></script>
</body>

</html>