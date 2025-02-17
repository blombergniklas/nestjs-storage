"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const flydrive_1 = require("@slynova/flydrive");
const storage_constants_1 = require("./storage.constants");
let StorageService = class StorageService {
    constructor(options) {
        this.options = options;
        this.storageManager = new flydrive_1.StorageManager(options);
    }
    getDisk(name) {
        return this.storageManager.disk(name);
    }
    registerDriver(name, driver) {
        this.storageManager.registerDriver(name, driver);
    }
};
StorageService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(storage_constants_1.STORAGE_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], StorageService);
exports.StorageService = StorageService;
