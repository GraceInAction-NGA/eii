<?php
	// Exit if accessed directly
	if( !defined( 'ABSPATH' ) ) exit;


	$charset_collate = '';
	if ( ! empty(WPF()->db->charset) ) $charset_collate = "DEFAULT CHARACTER SET " . WPF()->db->charset;
	if ( ! empty(WPF()->db->collate) ) $charset_collate .= " COLLATE " . WPF()->db->collate;
	$engine = version_compare(WPF()->db->db_version(), '5.6.4', '>=') ? 'InnoDB' : 'MyISAM';

	$wpforo_sql = array(
        WPF()->tables->forums => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->forums."`(  
		  `forumid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `title` VARCHAR(255) NOT NULL,
		  `slug` VARCHAR(255) NOT NULL,
		  `description` LONGTEXT,
		  `parentid` INT UNSIGNED NOT NULL DEFAULT 0,
		  `icon` VARCHAR(255),
		  `last_topicid` INT UNSIGNED NOT NULL DEFAULT 0,
		  `last_postid` INT UNSIGNED NOT NULL DEFAULT 0,
		  `last_userid` INT UNSIGNED NOT NULL DEFAULT 0,
		  `last_post_date` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `topics` INT NOT NULL DEFAULT 0,
		  `posts` INT NOT NULL DEFAULT 0,
		  `permissions` TEXT,
		  `meta_key` TEXT,
		  `meta_desc` TEXT,
		  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `is_cat` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `cat_layout` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `order` INT UNSIGNED NOT NULL DEFAULT 0,
		  `color` VARCHAR(7) NOT NULL DEFAULT '',
		  PRIMARY KEY (`forumid`),
  		  UNIQUE KEY `UNIQUE SLUG` (`slug`(191)),
		  KEY `order` (`order`),
		  KEY `status` (`status`),
		  KEY `parentid` (`parentid`),
		  KEY `last_postid` (`last_postid`),
		  KEY `is_cat` (`is_cat`)
		) ENGINE=InnoDB $charset_collate",
        WPF()->tables->topics => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->topics."`(  
		  `topicid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `forumid` INT UNSIGNED NOT NULL,
		  `first_postid` BIGINT UNSIGNED NOT NULL DEFAULT 0,
		  `userid` INT UNSIGNED NOT NULL,
		  `title` VARCHAR(255) NOT NULL,
		  `slug` VARCHAR(255) NOT NULL,
		  `created` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `modified` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `last_post` BIGINT UNSIGNED NOT NULL DEFAULT 0,
		  `posts` INT NOT NULL DEFAULT 0,
		  `votes` INT NOT NULL DEFAULT 0,
		  `answers` INT NOT NULL DEFAULT 0,
		  `views` INT UNSIGNED NOT NULL DEFAULT 0,
		  `meta_key` TEXT,
		  `meta_desc` TEXT,
		  `type` TINYINT NOT NULL DEFAULT 0,
		  `solved` TINYINT(1) NOT NULL DEFAULT 0,
		  `closed` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `has_attach` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `private` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `name` VARCHAR(50) NOT NULL DEFAULT '',
		  `email` VARCHAR(50) NOT NULL DEFAULT '',
		  `prefix` VARCHAR(100) NOT NULL DEFAULT '',
		  `tags` TEXT,
		  PRIMARY KEY (`topicid`),
  		  KEY `slug` (`slug`(191)),
  		  FULLTEXT KEY `title` (`title`),
		  KEY `forumid` (`forumid`),
		  KEY `first_postid` (`first_postid`), 
		  KEY `created` (`created`),
		  KEY `modified` (`modified`),
		  KEY `last_post` (`last_post`),
		  KEY `type` (`type`),
		  KEY `status` (`status`),
		  KEY `email` (`email`),
		  KEY `solved` (`solved`),
		  KEY `is_private` (`private`),
		  KEY `own_private` (`userid`,`private`),
		  KEY `forumid_status` (`forumid`,`status`),
		  KEY `forumid_status_private` (`forumid`,`status`,`private`),
		  KEY `prefix` (`prefix`)
		) ENGINE=$engine $charset_collate",
        WPF()->tables->posts => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->posts."`(  
		  `postid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `parentid` BIGINT UNSIGNED NOT NULL DEFAULT 0,
		  `forumid` INT UNSIGNED NOT NULL,
		  `topicid` BIGINT UNSIGNED NOT NULL,
		  `userid` INT UNSIGNED NOT NULL,
		  `title` varchar(255),
		  `body` LONGTEXT,
		  `created` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `modified` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `likes` INT UNSIGNED NOT NULL DEFAULT 0,
		  `votes` INT NOT NULL DEFAULT 0,
		  `is_answer` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  		  `is_first_post` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `name` VARCHAR(50) NOT NULL DEFAULT '',
		  `email` VARCHAR(50) NOT NULL DEFAULT '',
		  `private` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
		  `root` BIGINT NULL DEFAULT NULL,
		  PRIMARY KEY (`postid`),
		  FULLTEXT KEY `title`(`title`(191)),
		  FULLTEXT KEY `body` (`body`),
		  FULLTEXT KEY `title_plus_body` (`title`,`body`),
		  KEY `topicid` (`topicid`),
		  KEY `forumid` (`forumid`),
		  KEY `userid` (`userid`),
		  KEY `created` (`created`),
		  KEY `parentid` (`parentid`),
		  KEY `is_answer` (`is_answer`),
		  KEY `is_first_post` (`is_first_post`),
		  KEY `status` (`status`),
		  KEY `email` (`email`),
		  KEY `is_private` (`private`),
		  KEY `root` (`root`),
		  KEY `forumid_status` (`forumid`,`status`),
		  KEY `topicid_status` (`topicid`,`status`),
		  KEY `topicid_solved` (`topicid`,`is_answer`),
		  KEY `topicid_parentid` (`topicid`,`parentid`),
		  KEY `forumid_status_private` (`forumid`, `status`, `private`),
		  KEY `forumid_answer_first` (`forumid`, `is_answer`, `is_first_post`)
		) ENGINE=$engine $charset_collate",
        WPF()->tables->profiles => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->profiles."` (
		  `userid` INT UNSIGNED NOT NULL,
		  `title` VARCHAR(255) NOT NULL DEFAULT 'member',
		  `username` VARCHAR(255) NOT NULL,
		  `groupid` INT UNSIGNED NOT NULL,
		  `posts` INT NOT NULL DEFAULT 0,
		  `questions` INT NOT NULL DEFAULT 0,
  		  `answers` INT NOT NULL DEFAULT 0,
  		  `comments` INT NOT NULL DEFAULT 0,
		  `site` VARCHAR(255),
		  `icq` VARCHAR(50),
		  `aim` VARCHAR(50),
		  `yahoo` VARCHAR(50),
		  `msn` VARCHAR(50),
		  `facebook` VARCHAR(255),
		  `twitter` VARCHAR(255),
		  `gtalk` VARCHAR(50),
		  `skype` VARCHAR(50),
		  `avatar` VARCHAR(255),
		  `signature` TEXT,
		  `about` TEXT,
		  `occupation` TEXT,
		  `location` VARCHAR(255),
		  `last_login` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
		  `online_time` INT UNSIGNED,
		  `rank` INT UNSIGNED NOT NULL DEFAULT 0,
		  `like` INT UNSIGNED NOT NULL DEFAULT 0,
		  `status` VARCHAR(8) DEFAULT 'active' COMMENT 'active, blocked, trashed, spamer',
		  `timezone` VARCHAR(255),
		  `is_email_confirmed` TINYINT(1) NOT NULL DEFAULT 0,
		  `secondary_groups` VARCHAR(255),
		  `fields` LONGTEXT,
		  PRIMARY KEY (`userid`),
		  KEY `groupid` (`groupid`),
		  KEY `online_time` (`online_time`),
		  KEY `posts` (`posts`),
		  KEY `status` (`status`),
		  KEY `is_email_confirmed` (`is_email_confirmed`)
		) ENGINE=InnoDB $charset_collate",
        WPF()->tables->usergroups => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->usergroups."`(  
		  `groupid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `name` VARCHAR(255) NOT NULL,
		  `cans` LONGTEXT NOT NULL COMMENT 'board permissions',
		  `description` TEXT,
		  `utitle` VARCHAR(100) NOT NULL DEFAULT '',
		  `role` VARCHAR(50) NOT NULL DEFAULT '',
		  `access` VARCHAR(50) NOT NULL DEFAULT '',
		  `color` varchar(7) NOT NULL DEFAULT '',
		  `visible` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
		  `secondary` tinyint(1) UNSIGNED NOT NULL DEFAULT 1,
		  PRIMARY KEY (`groupid`),
		  KEY `visible` (`visible`),
		  KEY `secondary` (`secondary`),
		  UNIQUE KEY `UNIQUE_GROUP_NAME` (`name`(191))
		) ENGINE=InnoDB $charset_collate",
        WPF()->tables->languages => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->languages."`(  
		  `langid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `name` VARCHAR(255) NOT NULL,
		  PRIMARY KEY (`langid`),
		  UNIQUE KEY `UNIQUE language name` (`name`(191))
		) ENGINE=InnoDB $charset_collate",
        WPF()->tables->phrases => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->phrases."` (
		  `phraseid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `langid` INT UNSIGNED NOT NULL,
		  `phrase_key` text NOT NULL,
		  `phrase_value` text NOT NULL,
		  `package` VARCHAR(255) NOT NULL DEFAULT 'wpforo',
		  PRIMARY KEY (`phraseid`),
		  KEY `langid` (`langid`),
		  KEY `phrase_key` (`phrase_key`(191)),
		  UNIQUE KEY lng_and_key_uniq (`langid`, `phrase_key`(191))
		) ENGINE=MyISAM $charset_collate",
        WPF()->tables->likes => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->likes."`(  
		  `likeid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `userid` INT UNSIGNED NOT NULL,
		  `postid`  INT UNSIGNED NOT NULL,
		  `post_userid` INT UNSIGNED NOT NULL,
		  PRIMARY KEY (`likeid`),
		  UNIQUE KEY `userid` (`userid`,`postid`),
		  KEY `post_userid` (`post_userid`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->views => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->views."`(  
		  `vid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `userid` INT UNSIGNED NOT NULL,
		  `topicid`  INT UNSIGNED NOT NULL,
		  `created` INT UNSIGNED NOT NULL,
		  PRIMARY KEY (`vid`),
		  KEY `userid` (`userid`),
		  KEY `topicid` (`topicid`),
		  UNIQUE KEY `user_topic` (`userid`,`topicid`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->votes => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->votes."`(  
		  `voteid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `userid` INT UNSIGNED NOT NULL,
		  `postid`  INT UNSIGNED NOT NULL,
		  `reaction` TINYINT NOT NULL DEFAULT 1,
		  `post_userid` INT UNSIGNED NOT NULL,
		  PRIMARY KEY (`voteid`),
		  UNIQUE KEY `userid` (`userid`,`postid`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->accesses => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->accesses."`(  
		  `accessid` INT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `access` VARCHAR(255) NOT NULL,
		  `title` VARCHAR(255) NOT NULL,
		  `cans` LONGTEXT NOT NULL COMMENT 'forum permissions',
		  PRIMARY KEY (`accessid`),
		  UNIQUE KEY ( `access`(191) )
		) ENGINE=InnoDB $charset_collate",
        WPF()->tables->subscribes => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->subscribes."` (
		  `subid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `itemid` BIGINT UNSIGNED NOT NULL,
		  `type` VARCHAR(5) NOT NULL,
		  `confirmkey` varchar(32) NOT NULL,
		  `userid` BIGINT UNSIGNED NOT NULL,
		  `active` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
		  `user_name` VARCHAR(60) NOT NULL,
  		  `user_email` VARCHAR(60) NOT NULL,
		  PRIMARY KEY (`subid`),
		  UNIQUE KEY `fld_group_unq` (`itemid`,`type`,`userid`,`user_email`(60)),
		  UNIQUE KEY `confirmkey` (`confirmkey`),
		  KEY `itemid_2` (`itemid`),
		  KEY `userid` (`userid`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->visits => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->visits."` (
		  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
		  `userid` BIGINT UNSIGNED NOT NULL,
		  `name` VARCHAR(60) NOT NULL,
		  `ip` VARCHAR(60) NOT NULL,
		  `time` INT UNSIGNED NOT NULL,
		  `forumid` INT UNSIGNED NOT NULL,
		  `topicid` BIGINT UNSIGNED NOT NULL,
		  PRIMARY KEY (`id`),
		  KEY `userid` (`userid`),
		  KEY `forumid` (`forumid`),
		  KEY `topicid` (`topicid`),
		  KEY `time` (`time`),
		  KEY `ip` (`ip`),
		  KEY `time_forumid` (`time`,`forumid`),
          KEY `time_topicid` (`time`,`topicid`),
		  UNIQUE KEY `unique_tracking` (`userid`,`ip`,`forumid`,`topicid`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->activity => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->activity."` (
		  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
          `type` VARCHAR(60) NOT NULL,
          `itemid` BIGINT UNSIGNED NOT NULL,
          `itemtype` VARCHAR(60) NOT NULL,
          `itemid_second` BIGINT UNSIGNED NOT NULL DEFAULT 0,
          `userid` BIGINT UNSIGNED NOT NULL DEFAULT 0,
          `name` VARCHAR(60) NOT NULL DEFAULT '',
          `email` VARCHAR(70) NOT NULL DEFAULT '',
          `date` INT UNSIGNED NOT NULL DEFAULT 0,
          `content` TEXT,
          `permalink` VARCHAR(1024) NOT NULL DEFAULT '',
          `new` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
          PRIMARY KEY (`id`),
          KEY `type` (`type`),
          KEY `type_objid_objtype` (`type`,`itemid`,`itemtype`),
          KEY `type_objid_objtype_userid` (`type`,`itemid`,`itemtype`,`userid`),
          KEY `itemtype_userid_new` (`itemtype`,`userid`,`new`),
          KEY `date` (`date`)
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->post_revisions => "CREATE TABLE IF NOT EXISTS `" . WPF()->tables->post_revisions . "` (
	        `revisionid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
			`userid` BIGINT UNSIGNED NOT NULL DEFAULT 0,
			`textareaid` VARCHAR(50) NOT NULL,
			`postid` BIGINT UNSIGNED NOT NULL DEFAULT 0,
			`body` LONGTEXT,
			`created` INT UNSIGNED NOT NULL DEFAULT 0,
			`version` SMALLINT NOT NULL DEFAULT 0,
			`email` VARCHAR(50) NOT NULL DEFAULT '',
			`url` TEXT,
			PRIMARY KEY (`revisionid`),
			KEY `userid_textareaid_postid_email` (`userid`, `textareaid`, `postid`, `email`, `url`(70))
		) ENGINE=INNODB $charset_collate",
        WPF()->tables->tags => "CREATE TABLE IF NOT EXISTS `".WPF()->tables->tags."`(  
		  `tagid` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
          `tag` VARCHAR(255) NOT NULL,
          `prefix` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0,
          `count` INT UNSIGNED NOT NULL DEFAULT 0,
		  PRIMARY KEY (`tagid`),
		  UNIQUE KEY `tag` (`tag`(190)),
		  KEY (`prefix`)
		) ENGINE=INNODB $charset_collate"
	);