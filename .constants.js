module.exports = Object.freeze({
  TOKEN: '1133389833:AAE79QSbuB_SqGc1g6mrvGs_TaGJar4oI-k', //Telegramm Bot token!
  ARIA_SECRET: 'NARNIA', //Enter the secret key you entered in `aria.sh` file while editing
  ARIA_DOWNLOAD_LOCATION: '/app/downloads', //This is for heroku on termux change it to your directory of cloned repo using "pwd" command
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //"No need to touch this!" The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFF'], // Files/top level directories with these substrings in the filename won't be downloaded
  GDRIVE_PARENT_DIR_ID: '1IPxi0IudGAWk_WV9Y7nnFEEsa7YIuujt',
  SUDO_USERS: [1020637116, 458492835],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001486211418],	// Telegram chat IDs. Anyone in these chats can use the bot.
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  } 
});
