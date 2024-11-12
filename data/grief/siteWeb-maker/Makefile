
# Le Makefile des rêveurs et des explorateurs
MAGIC_TARGETS := codex build menu install_zsh clean_zsh

all: intro help mkB $(MAGIC_TARGETS)

intro:
	@echo "╔═══════════════════════════════════════════════════════════╗"
	@echo "║               O                                           ║"
	@echo "║   _   _ _ __  _ _   _____ _ __ ___       _ __ ___   ___   ║"
	@echo "║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_  '_':./ __|  ║"
	@echo "║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | !__   ║"
	@echo "║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║"
	@echo "║                                                           ║"
	@echo "╚═══════════════════════════════════════════════════════════╝"

help:
	@echo "╔══════════════════════════════╗"
	@echo "║       MAGIC MAKEFILE         ║"
	@echo "╠══════════════════════════════╣"
	@echo "║  MENU                        ║"
	@echo "║      [_]CODEX                ║"
	@echo "║      [_]BUILD                ║"
	@echo "║      [_]REP                  ║"
	@echo "║      [_]FILE                 ║"
	@echo "║      [_]SCRIPT()             ║"
	@echo "║      [_]CLEAN                ║"
	@echo "║      [_]MENU                 ║"
	@echo "║      [_]INSTALL_ZSH          ║"
	@echo "║      [_]CLEAN_ZSH            ║"
	@echo "╚══════════════════════════════╝"

# Magie des mots
codex:
	@echo "Quantum whispers reveal a story to be told"
	@node codex.js
	
build: buildHtml buildCss buildJS buildJson
# Fabrication de la magie
buildHtml:
	@echo "Crafting web's fabric with quantum threads so bold"
	@node html.js

buildCss:
	@echo "Shaping beauty with qubits in every fold"
	@node css.js

buildJS:
	@echo "Weaving the logic with quantum entanglements we behold"
	@node javascript.js

buildJson:
	@echo "Encoding knowledge in cosmic structures, truths to uphold"
	@node json.js

# Ouvrez-vous aux dimensions cachées
mkB:
	@echo "Awakening a new dimension with a cosmic click"
	@bash build.sh

# Afficher le menu
menu:
	@bash menu.sh

# Gestion des configurations zsh
ZSH_CONFIG_DIR = ~/.zsh_config
MODULE_ZSH_DIR = ~/.module.zsh

install_zsh:
	@echo "Installing zsh configurations..."
	@cp -v $(ZSH_CONFIG_DIR)/*.sh $(MODULE_ZSH_DIR)
	@echo "Zsh configurations installed."

clean_zsh:
	@echo "Cleaning up installed zsh configurations..."
	@rm -f $(MODULE_ZSH_DIR)/*.sh
	@echo "Zsh configurations cleaned."

# Nettoyage de l'éther
clean-r:
	@echo "Returning the quantum realm to pristine state"
	@rm -rf output/* build/* src/* data/*

clean-R:
	@echo "Unweaving the fabric, a celestial fate"
	@rm -rf output/ build/ src/ data/

clean: clean-r clean-R